import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactSubmissionsRouter from "./contact-submissions";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactSubmissionsRouter);

export default router;
