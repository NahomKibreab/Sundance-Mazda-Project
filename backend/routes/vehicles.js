const router = require("express").Router();

module.exports = (db) => {
  // list all avaliable cars
  router.get("/cars", (req, res) => {
    db.query(`SELECT * from vehicles WHERE avaliable=true;`).then((data) => {
      res.send(data.rows);
    });
  });

  // change car unavaliable / sold
  router.put("/cars/:car_id", (req, res) => {
    db.query(`UPDATE vehicles set avaliable=false WHERE id=$1;`, [
      req.params.car_id,
    ]).then((data) => {
      res.send(data.rows);
    });
  });

  // list only the unique car models
  router.get("/cars/models", (req, res) => {
    db.query(
      `SELECT DISTINCT ON (model) id, year, model, make, trim, price, image_links FROM vehicles WHERE avaliable=true;`
    ).then((data) => {
      res.send(data.rows);
    });
  });

  return router;
};
