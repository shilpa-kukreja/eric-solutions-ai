import express from "express";
import {
  createTeamMember,
  getAllTeamMembers,
  getSingleTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controllers/teamcontroller.js";
import upload from "../middleware/upload.js";


const router = express.Router();

// ROUTES
router.post("/create", upload.single("image"), createTeamMember);
router.get("/list", getAllTeamMembers);
router.get("/:id", getSingleTeamMember);
router.put("/update/:id", upload.single("image"), updateTeamMember);
router.delete("/delete/:id", deleteTeamMember);

export default router;