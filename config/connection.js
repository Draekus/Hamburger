// Require mysql
var mysql = require("mysql");

// Set up our connection information
if (process.envJAWS_URL) {
  connection = mysql.createConnection(process.envJAWSDB_URL)
}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Powerade.1",
    database: "burgers_db"
  });
}


// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;