// Set up connection from Node to MySQL and export the connection
const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Burger_Eater",
    password: "password",
    database: "burgers_DB"
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
