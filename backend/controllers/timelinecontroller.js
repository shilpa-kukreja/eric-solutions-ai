import Timeline from "../models/timelinemodel.js";

// CREATE
export const createTimeline = async (req, res) => {
  try {
    const timeline = new Timeline(req.body);
    await timeline.save();

    res.status(201).json({
      success: true,
      message: "Timeline created",
      data: timeline,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
export const getAllTimelines = async (req, res) => {
  try {
    const timelines = await Timeline.find({ status: true }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: timelines,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE
export const getSingleTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findById(req.params.id);

    if (!timeline) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ success: true, data: timeline });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
export const updateTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Updated successfully",
      data: timeline,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
export const deleteTimeline = async (req, res) => {
  try {
    await Timeline.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};