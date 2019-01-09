// Importing the connection.js file in order to use the MYSQL module
const connection = require('./connection');

const orm = {
    // MYSQL query which selects everything from the selected table
    selectAll: function(table, cb) {
        console.log('Initiating SELECT ALL DB Query...');
        const sql = 'SELECT * FROM ??';
        connection.query(sql, table, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    // MYSQL query which adds a column to the selected table
    insertOne: function(table, column, value, cb) {
        console.log('Initiating INSERT INTO DB Query...');
        const sql = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(sql, [table, column, value], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    // MYSQL query which changes a column in the selected table
    updateOne: function(table, column, updatedValue, id, idValue, cb) {
        console.log('Initiating UPDATE DB Query...');
        const sql = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        const values = [table, column, updatedValue, id, idValue];
        connection.query(sql, values, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    // MYQL query which deletes a row with the selected ID
    deleteOne: function(table, column, value, cb) {
        console.log('Initiating DELETE DB Query...');
        const sql = 'DELETE FROM ?? WHERE ?? = ?';
        const values = [table, column, value, cb];
        connection.query(sql, values, function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result)
        })
    }

}

// Exporting the queries to the burger.js file
module.exports = orm;