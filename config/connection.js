// Set up connection from Node to MySQL and export the connection
const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "aqx5w9yc5brambgl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "ib6spljo8fw7lrrc",
        password: "q3u6i52asyd5kfom",
        database: "nmdbvwnurzsnnbxh"
    })
};

// Make connection
connection.connect(err => {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
