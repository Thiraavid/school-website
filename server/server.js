import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import eventsRouter from "./routes/events.js";
import facultyRouter from "./routes/faculty.js";
import academicsRouter from "./routes/academics.js";
import announcementsRouter from "./routes/announcements.js";
import galleryRouter from "./routes/gallery.js";
import pool from "./db.js";
import path from "path";
import fs from "fs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Static serve uploads
const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
app.use('/uploads', express.static(path.join(process.cwd(), uploadDir)));

// Routes
app.use("/api/events", eventsRouter);
app.use("/api/faculty", facultyRouter);
app.use("/api/academics", academicsRouter);
app.use("/api/announcements", announcementsRouter);
app.use("/api/gallery", galleryRouter);

app.get("/", (req, res) => res.send("School Backend API Running ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
