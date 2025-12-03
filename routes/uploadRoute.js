import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  console.log("Route hit");
  console.log("req.file:", req.file);

  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // ✅ Print URL in terminal
    console.log("Uploaded Image URL:", uploadResult.secure_url);

    fs.unlinkSync(req.file.path); // remove temp file

    res.json({ success: true, url: uploadResult.secure_url });
  } catch (error) {
    console.error("Error uploading:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

export default router;
