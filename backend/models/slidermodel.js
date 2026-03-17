import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  image: {
    url: {
      type: String,
      required: true
    },
    originalname: String
  },
  isActive: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Slider = mongoose.model("Slider", sliderSchema);

export default Slider;