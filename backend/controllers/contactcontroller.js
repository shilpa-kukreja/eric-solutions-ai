import Contact from "../models/contactmodel.js";


export const createContact = async(req,res)=>{
    try {
        const {name,email,phone}=req.body;

        if(!name || !email || !phone){
            res.send(400).json({
                success:false,
                message:'Please fill all the fields'
            });
        }

        const contact = await Contact.create({name,email,phone});

        res.status(200).json({
            success:true,
            message:'Message sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong'
        })
    }
};

export const getContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find().sort({createdAt:-1});
        if(!contacts){
            res.status(404).json({
                message:'No contacts found'
            })
        }

        res.status(200).json({
            success:true,
            contacts
        })
    } catch (error) {

        res.status(500).json({
            success:false,
            message:'Internal server error'
        });
    }
};

export const deleteContact = async(req,res)=>{
    try {
        const deleteContact = await Contact.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success:true,
            message:'Contact deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal server error'
        })
        
    }
}