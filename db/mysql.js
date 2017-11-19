const mysql = require('mysql');
const RSVP = require('rsvp');

const pool = mysql.createPool({
  connectionLimit: 10,
  user: 'root',
  password: 'e340ZIb0H8w0',
  database: 'hippojs',
});

function getVideos() {
  return new RSVP.Promise((resolve, reject) => {
    pool.query('SELECT * from videos', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve({ result: rows });
      }
    });
  });
}

module.exports.getVideos = getVideos;
