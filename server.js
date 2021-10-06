require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.EXPRESSPORT || 8000;
const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SKEY);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// connecting server to build folder
if (process.env.NODE_ENV === "production") {
  //server statuc content
  app.use(express.static("frontend/build"));
}

// api
const vehicles = require("./routes/vehicles");
app.use("/api", vehicles(db));

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

// Stripe payment endpoint
app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Price", product.price);
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price,
          currency: "usd",
          customer: customer.id,
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
