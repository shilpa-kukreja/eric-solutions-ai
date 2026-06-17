import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      default: "",
    },
      instagram: {
      type: String,
      default: "",
    },
     linkedin: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Footer", footerSchema);