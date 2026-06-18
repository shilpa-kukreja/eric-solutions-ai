// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: false, // true for 465
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// export const sendOTPEmail = async (email, otp) => {
//   const mailOptions = {
//     from: process.env.SMTP_FROM,
//     to: email,
//     subject: "Admin Login OTP",
//     html: `<p>Your OTP for admin login is: <strong>${otp}</strong></p>
//            <p>This OTP is valid for 5 minutes.</p>`,
//   };
//   await transporter.sendMail(mailOptions);
// };



import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',                // Use Gmail’s built-in service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "*****" : "missing");

export const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Admin Login OTP',
    html: `<p>Your OTP for admin login is: <strong>${otp}</strong></p>
           <p>This OTP is valid for 5 minutes.</p>`,
  };

  await transporter.sendMail(mailOptions);
};