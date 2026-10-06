const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ESP8266 IoT Backend is running!");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello from the IoT API"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
