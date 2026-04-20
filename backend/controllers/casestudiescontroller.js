import CasestudiesBanner from "../models/casestudiesmodel.js";
import fs from 'fs';
import path from 'path';

// Upload Blog banner
export const uploadCasestudiesBanner = async (req, res) => {
  try {

     const casestudiesbanner = new CasestudiesBanner({
     image: {
     url: req.file.path.replace(/\\/g, "/"),
     originalname: req.file.originalname
   }
});

    await casestudiesbanner.save();

    res.status(201).json({
      success: true,
      message: "casestudies banner uploaded successfully",
      casestudiesbanner
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get All Sliders (Admin)
export const getAllCasestudiesBanners = async (req, res) => {
  try {

    const casestudiesbanners = await CasestudiesBanner.find().sort({ createdAt: -1 });

    res.json(casestudiesbanners);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// edit blog banner
export const editCasestudiesBanner = async (req, res) => {
  try {

    const casestudiesbanner = await CasestudiesBanner.findById(req.params.id);

    if (!casestudiesbanner) {
      return res.status(404).json({
        success: false,
        message: "blog banner  not found"
      });
    }

    if (req.file) {

      // Delete old image
      if (casestudiesbanner.image?.url) {
        fs.unlink(casestudiesbanner.image.url, (err) => {
          if (err) console.log("Old image delete error:", err);
        });
      }

      // Save new image
      casestudiesbanner.image = {
        url:  req.file.path.replace(/\\/g, "/"),
        originalname: req.file.originalname
      };

    }

    await casestudiesbanner.save();

    res.json({
      success: true,
      message: "Blog banner image updated successfully",
      casestudiesbanner
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


// Delete blog banner 
export const deleteCasestudiesBanner = async (req, res) => {
  try {

    const casestudiesbanner = await CasestudiesBanner.findById(req.params.id);

    if (!casestudiesbanner) {
      return res.status(404).json({
        success: false,
        message: "Case studies banner not found"
      });
    }

    // Delete image from server
    if (casestudiesbanner.image?.url) {
      fs.unlink(casestudiesbanner.image.url, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await CasestudiesBanner.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Blog banner deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Active Sliders (Frontend)
export const getActiveCasestudiesbanners = async (req, res) => {
  try {

    const casestudiesbanner = await CasestudiesBanner.find({ isActive: true }).limit(3);

    res.json(casestudiesbanner);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Toggle Active / Inactive
export const toggleCasestudiesBanner = async (req, res) => {
  try {

    const casestudiesbanner = await CasestudiesBanner.findById(req.params.id);

    if (!casestudiesbanner) {
      return res.status(404).json({ message: "Case studies banner not found" });
    }

    // If activating
    if (!casestudiesbanner.isActive) {

      const activeCasestudiesBanners = await CasestudiesBanner.find({ isActive: true })
        .sort({ createdAt: 1 });

      if (activeCasestudiesBanners.length >= 3) {

        await CasestudiesBanner.findByIdAndUpdate(activeCasestudiesBanners[0]._id, {
          isActive: false
        });

      }

      casestudiesbanner.isActive = true;

    } else {

      casestudiesbanner.isActive = false;

    }

    await casestudiesbanner.save();

    res.json({
      success: true,
      message: "Case studies banner status updated"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};