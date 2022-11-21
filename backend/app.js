import "./models.js";
import express from "express";
import { PORT } from "./env.js";
import { BloodCenter } from "./bloodCenter.js";

const app = express();
app.use(express.json());

app.get("/bloodCenters", async (req, res) => {
  const centers = await BloodCenter.findAll();
  res.json(centers);
});

async function run() {
  //await db.sync();
  app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
  });
}

run();
