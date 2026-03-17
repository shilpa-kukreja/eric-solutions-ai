import express from "express";
import upload from "../middleware/uploadslider.js";
import {
  uploadSlider,
  getAllSliders,
  getActiveSliders,
  toggleSlider,
  deleteSlider,
  editSliderImage
} from "../controllers/slidercontroller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadSlider);

router.get("/all", getAllSliders);

router.get("/active", getActiveSliders);

router.put("/toggle/:id", toggleSlider);

router.delete("/delete/:id", deleteSlider);

router.put("/edit/:id", upload.single("image"), editSliderImage);

export default router;