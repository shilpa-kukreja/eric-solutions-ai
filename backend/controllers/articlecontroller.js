import fs from "fs";
import path from "path";
import Article from "../models/articlemodel.js";


// ================= ADD BLOG =================
export const addArticle = async (req, res) => {
  try {
    const { articleName, articleDetail, slug, articleDate } = req.body;
    const imageFile = req.file;

    if (!articleName || !articleDetail || !slug || !articleDate || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const article = await Article.create({
      articleName,
      articleDetail,
      slug,
      articleDate,
      articleImg: {
        url: `/uploads/article/${imageFile.filename}`,
        originalname: imageFile.originalname,
      },
    });

    res.status(201).json({
      success: true,
      article,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// ================= GET ALL BLOGS =================
export const articleList = async (req, res) => {
  try {

    const articles = await Article.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      articles,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= GET BLOG BY ID =================
export const getArticleById = async (req, res) => {
  try {

    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      article,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= UPDATE BLOG =================
export const updateArticle = async (req, res) => {
  try {

    const { articleName, articleDetail, slug, articleDate } = req.body;
    const imageFile = req.file;

    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    // update fields
    article.articleName = articleName || article.articleName;
    article.articleDetail = articleDetail || article.articleDetail;
    article.slug = slug || article.slug;
    article.articleDate = articleDate || article.articleDate;

    // if new image uploaded
    if (imageFile) {

      // delete old image
      if (article.articleImg?.url) {
        const oldPath = path.join(
          "uploads/article",
          path.basename(article.articleImg.url)
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      article.articleImg = {
        url: `/uploads/article/${imageFile.filename}`,
        originalname: imageFile.originalname,
      };
    }

    await article.save();

    res.status(200).json({
      success: true,
      article,
      message: "article updated successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= DELETE BLOG =================
export const removeArticle = async (req, res) => {
  try {

    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    // delete image from server
    if (article.articleImg?.url) {

      const filePath = path.join(
        "uploads/article",
        path.basename(article.articleImg.url)
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "article deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};

// these controller are for the blog that is for the admin 
export const getfourarticle=async(req,res)=>{
  try {
    const articles=await Article.find().sort({createdAt:-1}).limit(4);   // show oonly 4 latest blogs

    res.status(200).json({
      success:true,
      articles
    });
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Internal server error'
    });    
  }
}


export const getSingleArticleSlug = async(req,res)=>{
  try {
    const articles = await Article.findOne({
      slug:req.params.slug
    });

    res.status(200).json({
      success:true,
      articles
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
    
  }
}
