import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    blogImg:{
        url:String,
        originalname:String
    },
    blogName:{
        type:String,
        required:true
    },
    blogDetail:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    blogDate:{
        type:Date,
        default:Date.now
    }
});

const Blog = mongoose.model("Blog",blogSchema);

export default Blog;

