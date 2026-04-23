import Footer from "../models/footermodel.js";

// GET CONTACT (single)
export const getFooter = async (req, res) => {
  try {
    let footer = await Footer.findOne();

    res.status(200).json({
      success: true,
      data: footer,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// CREATE or UPDATE (UPSERT)
export const upsertFooter = async (req, res) => {
  try {
    let footer = await Footer.findOne();

    if (footer) {
      footer = await Footer.findByIdAndUpdate(
        footer._id,
        req.body,
        { new: true }
      );
    } else {
      footer = new Footer(req.body);
      await footer.save();
    }

    res.status(200).json({
      success: true,
      message: "Footer saved",
      data: footer,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};