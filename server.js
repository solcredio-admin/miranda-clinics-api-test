const express = require("express");
const cors = require("cors");

const queueRoutes = require("./routes/queue");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/queue", queueRoutes);

app.get("/", (req, res) => {
  res.send("Miranda Clinics API");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Miranda Clinics API running on http://localhost:${PORT}`);
});