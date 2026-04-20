import mongoose from "mongoose";

const blogbannerSchema = new mongoose.Schema({
    image : {
        url:{
            type:String,
            required:true,
        },
        originalName:String
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

const BlogBanner= mongoose.model("Blogbanner",blogbannerSchema);

export default BlogBanner;