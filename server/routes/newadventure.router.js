const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.body);
    let user = req.user.id;
    let newAdventure = req.body;
    console.log('positions',newAdventure.positions);
    (async () => {
      const client = await pool.connect();

      try {
        await client.query("BEGIN");
        let queryText =
          'INSERT INTO "adventure_name"("person_id","advent_type_id", "start_date", "end_date", "adventure_name","icon_url","description") ' +
          'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING "id";';
        let values = [
          user,
          newAdventure.type,
          newAdventure.startDate,
          newAdventure.endDate,
          newAdventure.name,
          newAdventure.iconImg,
          newAdventure.description
        ];
        let adventureResult = await client.query(queryText, values);
        // id of the newly inserted adventure
        let adventureId = adventureResult.rows[0].id;
        //for loop will loop through the amount positions the user entered
        for (position of newAdventure.positions) {
          queryText = `INSERT INTO "user_adventure"("adventure_id", "latitude",
          "longitude","img_url","video_url")VALUES ($1, $2, $3, $4, $5)`;
          values = [
            adventureId,
            position.latitude,
            position.longitude,
            position.imgUrl,
            position.videoUrl
          ];
          const result = await client.query(queryText, values);
        }
        await client.query("COMMIT");
        res.sendStatus(201);
      } catch (e) {
        console.log("ROLLBACK", e);
        await client.query("ROLLBACK");
        throw e;
      } finally {
        client.release();
      }
    })().catch(error => {
      console.log("CATCH", error);
      res.sendStatus(500);
    });
  }
});

module.exports = router;
