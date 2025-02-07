const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const app = express();
const apiPort = 3000;

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/test-api", (req, res) => {
  res.send("Test http://80.211.3.196:3000/test-api");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
