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
    console.log("car_id", req.params.car_id);
    res.send(req.params.car_id);
    // db.query(`SELECT * from vehicles WHERE avaliable=true;`).then((data) => {
    //   res.send(data.rows);
    // });
  });

  return router;
};
