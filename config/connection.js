// Require mysql
var mysql = require("mysql");

// Set up our connection information
if (process.envJAWS_URL) {
  connection = mysql.createConnection(process.envJAWSDB_URL)
}
else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "kpmik42q5fvzkg5h",
    password: "rmo6cunvzk72xnwa",
    database: "i8vxr6yng9usw2rk"
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