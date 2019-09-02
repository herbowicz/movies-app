const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const targetBaseUrl = "movies-app/";
function handleRedirect(req, res) {
  const targetUrl = targetBaseUrl + req.originalUrl;
  res.redirect(targetUrl);
}
app.get("*", handleRedirect);

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test-api", (req, res) => {
  res.send("Test http://80.211.3.196:3000/test-api");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
