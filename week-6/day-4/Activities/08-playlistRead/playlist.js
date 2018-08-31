var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "playlist_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});


connection.connect(function (err) {
    if (err) {
        throw err;
    }

    connection.query(`select * from fav_songs where artist = "Built to Spill" or artist = "Modest Mouse";`, function (err, res) {
        console.log(res);
    })
});

