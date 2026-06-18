// import express from 'express';
// const router = express.Router();
// import {adminLogin} from '../controllers/admincontroller.js';


// router.post('/login',adminLogin);

// export default router;


import express from "express";
import {
  sendOTP,
  verifyOTP,
  completeLogin,
} from "../controllers/admincontroller.js";

const router = express.Router();

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/complete-login", completeLogin);

export default router;