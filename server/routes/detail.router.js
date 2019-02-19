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

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  let reqId = req.params.id;
  console.log('Delete request for id', reqId);
  let sqlText = 'DELETE FROM "user_adventure" WHERE id=$1;';
  pool.query(sqlText, [reqId])
    .then( (result) => {
      console.log('Item deleted');
      res.sendStatus(200);
    })
    .catch( (error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
  } else {
    //They are not authenticated.
    res.sendStatus(403);
}
})

module.exports = router;