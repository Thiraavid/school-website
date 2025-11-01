import express from "express";
import pool from "../db.js";
const router = express.Router();

await pool.query(`CREATE TABLE IF NOT EXISTS academics (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);`);

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM academics ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching academics" });
  }
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO academics (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding academic" });
  }
});

export default router;
