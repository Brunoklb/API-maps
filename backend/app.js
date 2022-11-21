import "./models.js";
import express from "express";
import { PORT } from "./env.js";

const app = express();

async function run() {
  //await db.sync();
  app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
  });
}

run();
