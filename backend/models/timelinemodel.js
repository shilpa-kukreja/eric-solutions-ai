import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // e.g. "2016 ERIC Founded"
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, 
      default: "🚀", // emoji or icon string
    },
    year: {
      type: Number,
      required: true,
    },
    order: {
      type: Number,
      default: 0, // for sorting
    },
    status: {
      type: Boolean,
      default: true, // active/inactive
    },
  },
  { timestamps: true }
);

export default mongoose.model("Timeline", timelineSchema);