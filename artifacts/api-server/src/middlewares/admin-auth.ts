import type { Request, Response, NextFunction } from "express";
import crypto from "node:crypto";

/**
 * Protects admin-only endpoints with a shared secret passed via the
 * `x-admin-key` header. Uses a timing-safe comparison to avoid leaking
 * the key length/content through response-time side channels.
 */
export function requireAdminKey(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const configuredKey = process.env.ADMIN_API_KEY;

  if (!configuredKey) {
    req.log.error(
      "ADMIN_API_KEY is not configured; refusing admin request",
    );
    res.status(503).json({ error: "Admin access is not configured" });
    return;
  }

  const providedKey = req.header("x-admin-key");

  if (!providedKey) {
    res.status(401).json({ error: "Missing admin credentials" });
    return;
  }

  const provided = Buffer.from(providedKey);
  const configured = Buffer.from(configuredKey);

  const isMatch =
    provided.length === configured.length &&
    crypto.timingSafeEqual(provided, configured);

  if (!isMatch) {
    res.status(401).json({ error: "Invalid admin credentials" });
    return;
  }

  next();
}
