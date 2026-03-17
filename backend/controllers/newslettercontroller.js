import Newsletter from "../models/newslettermodel.js";

export const createNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("server", email);

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please enter email",
      });
    }

    // check if already subscribed
    const existingNewsletter = await Newsletter.findOne({ email });

    if (existingNewsletter) {
      return res.status(200).json({
        success: false,
        message: "Already Subscribed",
      });
    }

    const newsletter = await Newsletter.create({ email });

    console.log("server", newsletter);

    return res.status(200).json({
      success: true,
      message: "Subscribed Successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const getNewsletter = async (req,res)=>{
    try {
        const newsletters = await Newsletter.find();
        res.status(200).json({
            success:true,
            newsletters
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal server error'
        })
        
    }
}

export const deleteNewsletter = async (req,res)=>{
  try {

    await Newsletter.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success:true,
      message:"Subscriber deleted"
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:"Internal server error"
    });

  }
}