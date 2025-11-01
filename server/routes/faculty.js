import express from "express";
import pool from "../db.js";
const router = express.Router();

await pool.query(`CREATE TABLE IF NOT EXISTS faculty (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  subject VARCHAR(255),
  photo TEXT
);`);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM faculty ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching faculty" });
  }
});

router.post("/", async (req, res) => {
  const { name, subject, photo } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO faculty (name, subject, photo) VALUES ($1, $2, $3) RETURNING *",
      [name, subject, photo]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding faculty" });
  }
});

export default router;
