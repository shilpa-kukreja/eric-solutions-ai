import Team from "../models/teammodel.js";
import fs from "fs";

// CREATE
export const createTeamMember = async (req, res) => {
  try {
    const {
      name,
      designation,
      quote,
      email,
      facebook,
      instagram,
      twitter,
      linkedin,
      order,
    } = req.body;

    const member = new Team({
      name,
      designation,
      quote,
      order: order ? Number(order) : 0,

      image: req.file
        ? {
            url: req.file.path.replace(/\\/g, "/"),
            originalname: req.file.originalname,
          }
        : undefined,

      socialLinks: {
        email,
        facebook,
        instagram,
        twitter,
        linkedin,
      },
    });

    await member.save();

    res.status(201).json({
      success: true,
      message: "Team member created",
      data: member,
    });
  } catch (error) {
    console.error(error); // 👈 ADD THIS FOR DEBUG
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL
export const getAllTeamMembers = async (req, res) => {
  try {
    const members = await Team.find({ status: true }).sort({
      order: 1,
      createdAt: -1,
    });

    res.json({
      success: true,
      data: members,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE
export const getSingleTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    res.json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE
export const updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Not found" });
    }

    // Delete old image if new uploaded
    if (req.file && member.image?.url) {
      fs.unlinkSync(member.image.url);
    }

    member.name = req.body.name || member.name;
    member.designation = req.body.designation || member.designation;
    member.quote = req.body.quote || member.quote;

    member.socialLinks = {
      email: req.body.email || member.socialLinks.email,
      facebook: req.body.facebook || member.socialLinks.facebook,
      instagram: req.body.instagram || member.socialLinks.instagram,
      twitter: req.body.twitter || member.socialLinks.twitter,
      linkedin: req.body.linkedin || member.socialLinks.linkedin,
    };

    if (req.file) {
      member.image = {
        url: req.file.path.replace(/\\/g, "/"),
        originalname: req.file.originalname,
      };
    }

    await member.save();

    res.json({
      success: true,
      message: "Updated successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE
export const deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete image
    if (member.image?.url) {
      fs.unlinkSync(member.image.url);
    }

    await member.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
