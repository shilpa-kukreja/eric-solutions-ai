import Slider from "../models/slidermodel.js";
import fs from "fs";
import path from "path";

// Upload Slider
export const uploadSlider = async (req, res) => {
  try {

     const slider = new Slider({
     image: {
     url: req.file.path.replace(/\\/g, "/"),
     originalname: req.file.originalname
   }
});

    await slider.save();

    res.status(201).json({
      success: true,
      message: "Slider uploaded successfully",
      slider
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get All Sliders (Admin)
export const getAllSliders = async (req, res) => {
  try {

    const sliders = await Slider.find().sort({ createdAt: -1 });

    res.json(sliders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Active Sliders (Frontend)
export const getActiveSliders = async (req, res) => {
  try {

    const sliders = await Slider.find({ isActive: true }).limit(3);

    res.json(sliders);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Toggle Active / Inactive
export const toggleSlider = async (req, res) => {
  try {

    const slider = await Slider.findById(req.params.id);

    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    // If activating
    if (!slider.isActive) {

      const activeSliders = await Slider.find({ isActive: true })
        .sort({ createdAt: 1 });

      if (activeSliders.length >= 3) {

        await Slider.findByIdAndUpdate(activeSliders[0]._id, {
          isActive: false
        });

      }

      slider.isActive = true;

    } else {

      slider.isActive = false;

    }

    await slider.save();

    res.json({
      success: true,
      message: "Slider status updated"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete Slider
export const deleteSlider = async (req, res) => {
  try {

    const slider = await Slider.findById(req.params.id);

    if (!slider) {
      return res.status(404).json({
        success: false,
        message: "Slider not found"
      });
    }

    // Delete image from server
    if (slider.image?.url) {
      fs.unlink(slider.image.url, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await Slider.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Slider deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editSliderImage = async (req, res) => {
  try {

    const slider = await Slider.findById(req.params.id);

    if (!slider) {
      return res.status(404).json({
        success: false,
        message: "Slider not found"
      });
    }

    if (req.file) {

      // Delete old image
      if (slider.image?.url) {
        fs.unlink(slider.image.url, (err) => {
          if (err) console.log("Old image delete error:", err);
        });
      }

      // Save new image
      slider.image = {
        url:  req.file.path.replace(/\\/g, "/"),
        originalname: req.file.originalname
      };

    }

    await slider.save();

    res.json({
      success: true,
      message: "Slider image updated successfully",
      slider
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};