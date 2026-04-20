import BlogBanner from "../models/blogbannermodel.js";
import fs from 'fs';
import path from 'path';

// Upload Blog banner
export const uploadBlogBanner = async (req, res) => {
  try {

     const blogbanner = new BlogBanner({
     image: {
     url: req.file.path.replace(/\\/g, "/"),
     originalname: req.file.originalname
   }
});

    await blogbanner.save();

    res.status(201).json({
      success: true,
      message: "Blog Banner uploaded successfully",
      blogbanner
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get All Sliders (Admin)
export const getAllBlogBanners = async (req, res) => {
  try {

    const blogbanners = await BlogBanner.find().sort({ createdAt: -1 });

    res.json(blogbanners);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// edit blog banner
export const editBlogBanner = async (req, res) => {
  try {

    const blogbanner = await BlogBanner.findById(req.params.id);

    if (!blogbanner) {
      return res.status(404).json({
        success: false,
        message: "blog banner  not found"
      });
    }

    if (req.file) {

      // Delete old image
      if (blogbanner.image?.url) {
        fs.unlink(blogbanner.image.url, (err) => {
          if (err) console.log("Old image delete error:", err);
        });
      }

      // Save new image
      blogbanner.image = {
        url:  req.file.path.replace(/\\/g, "/"),
        originalname: req.file.originalname
      };

    }

    await blogbanner.save();

    res.json({
      success: true,
      message: "Blog banner image updated successfully",
      blogbanner
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


// Delete blog banner 
export const deleteBlogBanner = async (req, res) => {
  try {

    const blogbanner = await BlogBanner.findById(req.params.id);

    if (!blogbanner) {
      return res.status(404).json({
        success: false,
        message: "Blog banner not found"
      });
    }

    // Delete image from server
    if (blogbanner.image?.url) {
      fs.unlink(blogbanner.image.url, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await BlogBanner.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog banner deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Active Sliders (Frontend)
export const getActiveBlogbanners = async (req, res) => {
  try {

    const blogbanner = await BlogBanner.find({ isActive: true }).limit(3);

    res.json(blogbanner);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Toggle Active / Inactive
export const toggleBlogBanner = async (req, res) => {
  try {

    const blogbanner = await BlogBanner.findById(req.params.id);

    if (!blogbanner) {
      return res.status(404).json({ message: "Blog banner not found" });
    }

    // If activating
    if (!blogbanner.isActive) {

      const activeBlogBanners = await BlogBanner.find({ isActive: true })
        .sort({ createdAt: 1 });

      if (activeBlogBanners.length >= 3) {

        await BlogBanner.findByIdAndUpdate(activeBlogBanners[0]._id, {
          isActive: false
        });

      }

      blogbanner.isActive = true;

    } else {

      blogbanner.isActive = false;

    }

    await blogbanner.save();

    res.json({
      success: true,
      message: "Blog banner status updated"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};