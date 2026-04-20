import mongoose from "mongoose";

const casestudiesbannerSchema = new mongoose.Schema({
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

const CasestudiesBanner= mongoose.model("Casestudiesbanner",casestudiesbannerSchema);

export default CasestudiesBanner;