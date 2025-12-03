import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uploadRoute from "./routes/uploadRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoute);

app.get("/", (req, res) => {
  res.send("Cloudinary Upload Server Running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
