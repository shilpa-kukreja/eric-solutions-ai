import express from "express";
const router = express.Router();

import upload from "../middleware/upload.js";

import {
  addBlog,
  blogList,
  getBlogById,
  updateBlog,
  removeBlog,
  getfourblog,
  getSingleBlogSlug

} from "../controllers/blogcontroller.js";


// for admin
router.post("/add", upload.single("blogImg"), addBlog);

router.get("/list", blogList);

router.get("/get/:id", getBlogById);

router.put("/update/:id", upload.single("blogImg"), updateBlog);

router.delete("/delete/:id", removeBlog);


// for slug

router.get('/fourblogs',getfourblog);

router.get('/blogslug/:slug',getSingleBlogSlug)



export default router;