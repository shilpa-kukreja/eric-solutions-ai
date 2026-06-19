import express from "express";
import { getAnalyticsDashboard, getAnalyticsByCountry, getRealtimeActiveUsers } from "../controllers/analyticscontroller.js";

const router = express.Router();

router.get("/dashboard", getAnalyticsDashboard);
router.get("/by-country", getAnalyticsByCountry);
router.get("/realtime", getRealtimeActiveUsers);


export default router;