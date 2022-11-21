import express from "express";
import "./models.js";
import { db } from "./db.js";
import { PORT } from "./env.js";

const app = express();

async function run() {
  await db.sync();
  await app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
  });
}

run();
