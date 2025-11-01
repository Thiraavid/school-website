import express from "express";
import multer from "multer";
import pool from "../db.js";
import path from 'path';
import fs from 'fs';

const router = express.Router();

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

await pool.query(`CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  filename TEXT,
  caption TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM gallery ORDER BY uploaded_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching gallery" });
  }
});

router.post("/", upload.single('image'), async (req, res) => {
  try {
    const filename = req.file.filename;
    const caption = req.body.caption || null;
    const result = await pool.query(
      "INSERT INTO gallery (filename, caption) VALUES ($1, $2) RETURNING *",
      [filename, caption]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error uploading image" });
  }
});

export default router;
