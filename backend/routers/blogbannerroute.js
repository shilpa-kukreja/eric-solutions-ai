import express from "express";
import upload from "../middleware/upload.js";
import {
  uploadBlogBanner,
  getAllBlogBanners,
  editBlogBanner,
  deleteBlogBanner,
  getActiveBlogbanners,
 toggleBlogBanner
} from "../controllers/blogbannercontroller.js";

const router = express.Router();

router.post("/upload", upload.single("blogbanner"), uploadBlogBanner);

router.get("/all",  getAllBlogBanners);

router.get("/active", getActiveBlogbanners);

router.put("/toggle/:id", toggleBlogBanner);

router.delete("/delete/:id", deleteBlogBanner);

router.put("/edit/:id", upload.single("image"), editBlogBanner);

export default router;