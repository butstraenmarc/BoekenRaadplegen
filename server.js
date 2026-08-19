const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static("/volume1/web"));

app.listen(8080, () => {
  console.log("Server draait op http://192.168.1.181:8080");
});
