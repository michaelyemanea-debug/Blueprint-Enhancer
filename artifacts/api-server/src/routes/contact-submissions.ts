import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { db, contactSubmissionsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import {
  CreateContactSubmissionBody,
  CreateContactSubmissionResponse,
  ListContactSubmissionsResponse,
} from "@workspace/api-zod";
import { sanitizeText, isValidEmail } from "../lib/sanitize";
import { requireAdminKey } from "../middlewares/admin-auth";

const router: IRouter = Router();

// Public form submission endpoint -- keep the limit tight since a single
// legitimate visitor never needs to submit more than a couple of times.
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." },
});

// Admin read endpoint -- guards against brute-forcing the shared admin key.
// Applied per-IP before credentials are even checked.
const adminReadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." },
});

router.post(
  "/contact-submissions",
  contactFormLimiter,
  async (req, res): Promise<void> => {
    const parsed = CreateContactSubmissionBody.safeParse(req.body);
    if (!parsed.success) {
      req.log.warn(
        { errors: parsed.error.message },
        "Invalid contact submission payload",
      );
      res.status(400).json({ error: "Invalid submission" });
      return;
    }

    const { name, company, email, phone, assetClass, message, website } =
      parsed.data;

    // Honeypot: real users never fill this hidden field. Bots that
    // auto-fill every input will, so we silently pretend to succeed.
    if (website && website.trim().length > 0) {
      req.log.warn("Honeypot triggered on contact submission");
      res.status(201).json(CreateContactSubmissionResponse.parse({ success: true }));
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    await db.insert(contactSubmissionsTable).values({
      name: sanitizeText(name).slice(0, 200),
      company: company ? sanitizeText(company).slice(0, 200) : null,
      email: sanitizeText(email).slice(0, 320),
      phone: phone ? sanitizeText(phone).slice(0, 50) : null,
      assetClass: assetClass ? sanitizeText(assetClass).slice(0, 100) : null,
      message: sanitizeText(message).slice(0, 5000),
    });

    res
      .status(201)
      .json(CreateContactSubmissionResponse.parse({ success: true }));
  },
);

router.get(
  "/contact-submissions",
  adminReadLimiter,
  requireAdminKey,
  async (_req, res): Promise<void> => {
    const submissions = await db
      .select()
      .from(contactSubmissionsTable)
      .orderBy(desc(contactSubmissionsTable.createdAt));

    res.json(ListContactSubmissionsResponse.parse(submissions));
  },
);

export default router;
