const router = require("express").Router();

module.exports = (db) => {
  router.get("/cars", (req, res) => {
    db.query(`SELECT * from vehicles;`).then((data) => {
      res.send(data.rows);
    });
  });

  return router;
};
