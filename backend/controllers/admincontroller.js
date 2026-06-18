// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import Admin from "../models/adminmodel.js";

// const generateAdminToken = (id) => {
//   return jwt.sign(
//     {
//       id,
//       userType: "admin",
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "7d",
//     }
//   );
// };

// export const adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all the fields",
//       });
//     }

//     // check if any admin exists
//     let admin = await Admin.findOne();

//     // FIRST TIME → CREATE ADMIN
//     if (!admin) {
//       const hashedPassword = await bcrypt.hash(password, 10);

//       admin = await Admin.create({
//         email,
//         password: hashedPassword,
//       });

//       const token = generateAdminToken(admin._id);

//       return res.status(201).json({
//         success: true,
//         message: "Admin created and logged in",
//         token,
//       });
//     }

//     // ADMIN EXISTS → LOGIN ONLY

//     if (admin.email !== email) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid admin email",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, admin.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     const token = generateAdminToken(admin._id);

//     res.status(200).json({
//       success: true,
//       message: "Admin logged in successfully",
//       token,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };




import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/adminmodel.js";
import OTP from "../models/otpmodel.js";
import { sendOTPEmail } from "../config/nodemailer.js";

// generate a short‑lived token for OTP verification
const generateTempToken = (email) => {
  return jwt.sign(
    { email, verified: true },
    process.env.JWT_SECRET,
    { expiresIn: "5m" }
  );
};


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

// ---------- Send OTP ----------
export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // check if any admin exists
    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      // admin already exists → email must match the stored one
      if (existingAdmin.email !== email) {
        return res.status(400).json({
          success: false,
          message: "Invalid admin email. Please use the registered admin email.",
        });
      }
    }

    // generate 6‑digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // delete any previous OTP for this email
    await OTP.deleteMany({ email });

    // save new OTP
    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    // send email
    await sendOTPEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent to your email.",
      isFirstTime: !existingAdmin, // tell frontend if this is a first‑time setup
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------- Verify OTP ----------
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "Email and OTP are required" });
    }

    const otpRecord = await OTP.findOne({ email, otp });

    if (!otpRecord) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // check expiry (auto‑delete handles this, but still safe)
    if (otpRecord.expiresAt < new Date()) {
      await OTP.deleteOne({ _id: otpRecord._id });
      return res.status(400).json({ success: false, message: "OTP has expired" });
    }

    // delete used OTP
    await OTP.deleteOne({ _id: otpRecord._id });

    // generate temporary token (valid 5 min)
    const tempToken = generateTempToken(email);

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      tempToken,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------- Complete Login (final step) ----------
export const completeLogin = async (req, res) => {
  try {
    const { email, password, tempToken } = req.body;

    if (!email || !password || !tempToken) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and tempToken are required",
      });
    }

    // verify temporary token
    let decoded;
    try {
      decoded = jwt.verify(tempToken, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired temporary token. Please restart the login process.",
      });
    }

    // ensure token belongs to this email
    if (decoded.email !== email || !decoded.verified) {
      return res.status(401).json({
        success: false,
        message: "Invalid temporary token",
      });
    }

    // check if admin exists
    let admin = await Admin.findOne();

    if (!admin) {
      // FIRST TIME – create admin
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await Admin.create({
        email,
        password: hashedPassword,
      });

      const finalToken = generateAdminToken(admin._id); // use your existing function

      return res.status(201).json({
        success: true,
        message: "Admin created and logged in",
        token: finalToken,
      });
    } else {
      // EXISTING ADMIN – verify password
      if (admin.email !== email) {
        return res.status(400).json({
          success: false,
          message: "Email does not match the registered admin",
        });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }

      const finalToken = generateAdminToken(admin._id);

      res.status(200).json({
        success: true,
        message: "Admin logged in successfully",
        token: finalToken,
      });
    }
  } catch (error) {
    console.error("Complete login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};