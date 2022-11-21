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
  const { coordinates } = req.body;
  if (!coordinates) {
    return res
      .status(400)
      .send("missing coordinates attribute on request body");
  }
  let center = new BloodCenter({
    ...req.body,
    point: { type: "Point", coordinates },
  });

  try {
    await center.validate();
  } catch (details) {
    return res.status(400).json(details);
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
