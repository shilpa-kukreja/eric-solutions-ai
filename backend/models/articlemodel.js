import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
    articleImg:{
        url:String,
        originalname:String
    },
    articleName:{
        type:String,
        required:true
    },
    articleDetail:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    articleDate:{
        type:Date,
        default:Date.now
    }
});

const Article = mongoose.model("Article",articleSchema);

export default Article;

