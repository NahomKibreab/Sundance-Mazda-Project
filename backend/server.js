const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || 8000;
const morgan = require("morgan");

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send(`Server is listening on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
