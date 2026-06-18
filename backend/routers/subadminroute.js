import express from "express";
import {
  createSubAdmin,
  getAllSubAdmins,
  getSubAdminById,
  updateSubAdmin,
  deleteSubAdmin,
  subAdminLogin
} from "../controllers/subadmincontroller.js";
import upload from "../middleware/upload.js";
import { requireAdminAuth } from "../middleware/authmiddleware.js";


const router = express.Router();

// CREATE
router.post("/create",requireAdminAuth,upload.single("profileImg"), createSubAdmin);

// GET ALL
router.get("/all",requireAdminAuth, getAllSubAdmins);

// GET BY ID
router.get("/single/:id",requireAdminAuth, getSubAdminById);

// UPDATE
router.put("/update/:id",requireAdminAuth,upload.single("profileImg"), updateSubAdmin);
// DELETE
router.delete("/delete/:id",requireAdminAuth, deleteSubAdmin);

// LOGIN
router.post("/login", subAdminLogin);

export default router;