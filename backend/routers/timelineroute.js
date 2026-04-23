import express from "express";
import {
  createTimeline,
  getAllTimelines,
  getSingleTimeline,
  updateTimeline,
  deleteTimeline,
} from "../controllers/timelinecontroller.js";

const router = express.Router();

// CREATE
router.post("/create", createTimeline);

// GET ALL
router.get("/all", getAllTimelines);

// GET SINGLE
router.get("/:id", getSingleTimeline);

// UPDATE
router.put("/:id", updateTimeline);

// DELETE
router.delete("/:id", deleteTimeline);

export default router;