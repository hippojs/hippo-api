const express = require('express');

const mysql = require('../db/mysql');

const router = express.Router();

/* GET users listing. */
router.get('/videos', (req, res, next) => {
  mysql.getVideos().then(videos => {
    res.json(videos);
  });
});

module.exports = router;
