import express from "express";
import upload from "../middleware/upload.js";
import {
  uploadCasestudiesBanner,
  getAllCasestudiesBanners,
  editCasestudiesBanner,
  deleteCasestudiesBanner,
  getActiveCasestudiesbanners,
  toggleCasestudiesBanner
} from "../controllers/casestudiescontroller.js";

const router = express.Router();

router.post("/upload", upload.single("casestudiesbanner"), uploadCasestudiesBanner);

router.get("/all",  getAllCasestudiesBanners);

router.get("/active", getActiveCasestudiesbanners);

router.put("/toggle/:id", toggleCasestudiesBanner);

router.delete("/delete/:id", deleteCasestudiesBanner);

router.put("/edit/:id", upload.single("casestudiesbanner"), editCasestudiesBanner);

export default router;