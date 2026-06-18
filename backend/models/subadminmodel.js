import mongoose from 'mongoose';

const subadminSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    number:{type:String,required:true},
    gender:{type:String,required:true},
    profileImg:{type:String,required:true},
    status: { type: String, enum: ["active", "inactive"], default: "active" },

},
{
    timestamps:true
});

const SubAdmin = mongoose.model("SubAdmin",subadminSchema);

export default SubAdmin;

