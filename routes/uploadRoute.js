import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // 🔥 THIS IS THE CHANGE
    console.log("Uploaded Image URL:", uploadResult.secure_url);

    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      url: uploadResult.secure_url,
    });
  } catch (error) {
    console.error("Error uploading:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

export default router;
