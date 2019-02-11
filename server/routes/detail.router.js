const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        // console.log("req.user:", req.user);
        pool.query(`SELECT * FROM "user_adventure" WHERE "adventure_id" =
                    ${req.params.id}`)
          .then(results => res.send(results.rows))
          .catch(error => {
            console.log("error");
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