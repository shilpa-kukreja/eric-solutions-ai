import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/adminmodel.js";

const generateAdminToken = (id) => {
  return jwt.sign(
    {
      id,
      userType: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // check if any admin exists
    let admin = await Admin.findOne();

    // FIRST TIME → CREATE ADMIN
    if (!admin) {
      const hashedPassword = await bcrypt.hash(password, 10);

      admin = await Admin.create({
        email,
        password: hashedPassword,
      });

      const token = generateAdminToken(admin._id);

      return res.status(201).json({
        success: true,
        message: "Admin created and logged in",
        token,
      });
    }

    // ADMIN EXISTS → LOGIN ONLY

    if (admin.email !== email) {
      return res.status(400).json({
        success: false,
        message: "Invalid admin email",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = generateAdminToken(admin._id);

    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};