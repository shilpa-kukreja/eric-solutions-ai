import fs from "fs";
import path from "path";
import Blog from "../models/blogmodel.js";


// ================= ADD BLOG =================
export const addBlog = async (req, res) => {
  try {
    const { blogName, blogDetail, slug, blogDate } = req.body;
    const imageFile = req.file;

    if (!blogName || !blogDetail || !slug || !blogDate || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const blog = await Blog.create({
      blogName,
      blogDetail,
      slug,
      blogDate,
      blogImg: {
        url: `/uploads/${imageFile.filename}`,
        originalname: imageFile.originalname,
      },
    });

    res.status(201).json({
      success: true,
      blog,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// ================= GET ALL BLOGS =================
export const blogList = async (req, res) => {
  try {

    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      blogs,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= GET BLOG BY ID =================
export const getBlogById = async (req, res) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      blog,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= UPDATE BLOG =================
export const updateBlog = async (req, res) => {
  try {

    const { blogName, blogDetail, slug, blogDate } = req.body;
    const imageFile = req.file;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // update fields
    blog.blogName = blogName || blog.blogName;
    blog.blogDetail = blogDetail || blog.blogDetail;
    blog.slug = slug || blog.slug;
    blog.blogDate = blogDate || blog.blogDate;

    // if new image uploaded
    if (imageFile) {

      // delete old image
      if (blog.blogImg?.url) {
        const oldPath = path.join(
          "uploads",
          path.basename(blog.blogImg.url)
        );

        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }

      blog.blogImg = {
        url: `/uploads/${imageFile.filename}`,
        originalname: imageFile.originalname,
      };
    }

    await blog.save();

    res.status(200).json({
      success: true,
      blog,
      message: "Blog updated successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};



// ================= DELETE BLOG =================
export const removeBlog = async (req, res) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // delete image from server
    if (blog.blogImg?.url) {

      const filePath = path.join(
        "uploads",
        path.basename(blog.blogImg.url)
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};

// these controller are for the blog that is for the admin 
export const getfourblog=async(req,res)=>{
  try {
    const blogs=await Blog.find().sort({createdAt:-1}).limit(4);   // show oonly 4 latest blogs

    res.status(200).json({
      success:true,
      blogs
    });
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Internal server error'
    });    
  }
}


export const getSingleBlogSlug = async(req,res)=>{
  try {
    const blogs = await Blog.findOne({
      slug:req.params.slug
    });

    res.status(200).json({
      success:true,
      blogs
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
    
  }
}
