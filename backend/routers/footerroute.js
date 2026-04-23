import express from "express";
import { getFooter, upsertFooter } from "../controllers/footercontroller.js";

const router = express.Router();

router.get("/", getFooter);
router.post("/save", upsertFooter);

export default router;