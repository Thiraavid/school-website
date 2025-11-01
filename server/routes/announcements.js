import express from "express";
import pool from "../db.js";
const router = express.Router();

await pool.query(`CREATE TABLE IF NOT EXISTS announcements (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  message TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM announcements ORDER BY date DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching announcements" });
  }
});

router.post("/", async (req, res) => {
  const { title, message } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO announcements (title, message) VALUES ($1, $2) RETURNING *",
      [title, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding announcement" });
  }
});

export default router;
