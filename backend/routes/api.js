import express from "express";

import db from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Welcome to ConnectHub API").status(200);
});

export default router;