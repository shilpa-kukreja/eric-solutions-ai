import SubAdmin from "../models/subadminmodel.js";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const generateSubAdminToken = (id) => {
  return jwt.sign({ 
    id,
    userType: "subadmin",

  }, process.env.JWT_SECRET, { expiresIn: "7d" });
};


// ✅ CREATE SUBADMIN
export const createSubAdmin = async (req, res) => {
  try {
    const { fullName, email, password, number, gender, status } = req.body;

    const existing = await SubAdmin.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "SubAdmin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const profileImg = req.file ? req.file.path : "";

    const subadmin = await SubAdmin.create({
      fullName,
      email,
      password: hashedPassword,
      number,
      gender,
      profileImg,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Created successfully",
      subadmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ GET ALL SUBADMINS
export const getAllSubAdmins = async (req, res) => {
  try {
    const subadmins = await SubAdmin.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: subadmins.length,
      subadmins,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ GET SUBADMIN BY ID
export const getSubAdminById = async (req, res) => {
  try {
    const { id } = req.params;

    const subadmin = await SubAdmin.findById(id);

    if (!subadmin) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
      });
    }

    res.status(200).json({
      success: true,
      subadmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ UPDATE SUBADMIN
export const updateSubAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // 🔥 find existing user FIRST
    const existing = await SubAdmin.findById(id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
      });
    }

    // 🔥 if new image uploaded → delete old image
    if (req.file) {
      if (existing.profileImg) {
        const oldImagePath = path.join(process.cwd(), existing.profileImg);

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // delete old file
        }
      }

      data.profileImg = req.file.path;
    }

    // 🔥 password hash
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updated = await SubAdmin.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "SubAdmin updated",
      subadmin: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ DELETE SUBADMIN
export const deleteSubAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const subadmin = await SubAdmin.findById(id);

    if (!subadmin) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
      });
    }

    // 🔥 delete image from folder
    if (subadmin.profileImg) {
      const imagePath = path.join(process.cwd(), subadmin.profileImg);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await SubAdmin.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "SubAdmin deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// subadmin login 

export const subAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const subadmin = await SubAdmin.findOne({ email });

    if (!subadmin) {
      return res.status(404).json({
        success: false,
        message: "SubAdmin not found",
        
      });
    }

    const isMatch = await bcrypt.compare(password, subadmin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateSubAdminToken(subadmin._id);

    res.status(200).json({
      success: true,
      message: "SubAdmin logged in successfully",
      token,
      subadmin
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

