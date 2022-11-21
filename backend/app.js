import express from "express";
import { PORT } from "./env.js";
import { BloodCenter } from "./bloodCenter.js";

const app = express();
app.use(express.json());

app.get("/bloodCenters", async (req, res) => {
  const centers = await BloodCenter.findAll();
  res.json(centers);
});

app.post("/bloodCenters", async (req, res) => {
  let center = new BloodCenter(req.body);
  try {
    await center.validate();
  } catch (details) {
    return res.status(400).json({
      details,
      error: "bad request",
    });
  }
  await center.save();
  res.status(201).json(center);
});

app.use((error, req, res, next) => {
  if (error) {
    return res.status(500).send("internal server error");
  }
  next();
});

async function run() {
  app.listen(PORT, () => {
    console.log("server running on http://localhost:" + PORT);
  });
}

run();
