import express from "express";
import pool from "../db.js";
const router = express.Router();

await pool.query(`CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  date VARCHAR(50),
  description TEXT
);`);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching events" });
  }
});

router.post("/", async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO events (title, date, description) VALUES ($1, $2, $3) RETURNING *",
      [title, date, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding event" });
  }
});

export default router;
