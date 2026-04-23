import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads";

    // 👉 Decide folder based on route
    
    if (req.baseUrl.includes("blog")) {
      folder = "uploads/blog";
    }
    if (req.baseUrl.includes("slider")) {
    folder = "uploads/slider";
    }
     if (req.baseUrl.includes("blogbanner")) {
    folder = "uploads/blogbanner";
    }
     if (req.baseUrl.includes("casestudies")) {
    folder = "uploads/casestudies";
    }
      if (req.baseUrl.includes("team")) {
    folder = "uploads/team";
    }
    if (req.baseUrl.includes("article")) {
      folder = "uploads/article";
    }
     
    
  

    // Create folder if not exists
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

export default upload;