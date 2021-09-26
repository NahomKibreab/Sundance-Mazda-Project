require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.EXPRESSPORT || 8000;
const morgan = require("morgan");
const db = require("./db");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Server is listening on port ${PORT}`);
});

app.get("/db", (req, res) => {
  db.query(
    `
    select * from test;
  `
  ).then((data) => {
    res.json(data.rows);
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
