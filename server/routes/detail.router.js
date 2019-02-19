const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
      console.log(req.params.id);
        // console.log("req.user:", req.user);
        //SELECT * FROM "user_adventure" WHERE "adventure_id" = 16;
        pool.query(`SELECT * FROM "user_adventure" WHERE "adventure_id" =
                    ${req.params.id};`)
          .then((result) => {
            res.send(result.rows)
          }).catch(error => {
            console.log("error",error);
            res.sendStatus(403);
          });
      } else {
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