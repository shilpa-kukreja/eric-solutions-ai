import express from "express";
const router = express.Router();

import upload from "../middleware/upload.js";

import {
  addArticle,
  articleList,
  getArticleById,
  updateArticle,
  removeArticle,
  getSingleArticleSlug,
  getfourarticle

} from "../controllers/articlecontroller.js";


// for admin
router.post("/add", upload.single("articleImg"), addArticle);

router.get("/list", articleList);

router.get("/get/:id", getArticleById);

router.put("/update/:id", upload.single("articleImg"), updateArticle);

router.delete("/delete/:id", removeArticle);


// for slug

router.get('/fourarticles',getfourarticle);

router.get('/articleslug/:slug',getSingleArticleSlug)



export default router;