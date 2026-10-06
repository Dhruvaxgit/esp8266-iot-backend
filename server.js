const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ESP8266 IoT Backend is running!");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from the IoT API"
  });
});

app.post("/api/distance", (req, res) => {
  const distance = req.body.distance;

  console.log("Distance received:", distance);

  res.json({
    success: true,
    distance: distance
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
