const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
    if (req.isAuthenticated()) {
      console.log("req.user:", req.user);
      pool.query(`SELECT * FROM "adventure_type"`)
        .then(results => res.send(results.rows))
        .catch(error => {
          console.log("error");
          res.sendStatus(403);
        });
    } else {
        console.log('error in get type')
      //They are not authenticated.
      res.sendStatus(403);
    }
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;