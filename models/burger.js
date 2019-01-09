const orm = require('../config/orm');

const burger = {
    // A function which points to the ORM's SELECT ALL query
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // A function which points to the ORM's INSERT INTO query 
    insertOne: function(column, value, cb) {
        orm.insertOne('burgers', column, value, function(res) {
            cb(res);
        });
    },
    // A function which points to the ORM's UPDATE query
    updateOne: function(column, updatedValue, id, idValue, cb) {
        orm.updateOne('burgers', column, updatedValue, id, idValue, function(res) {
            cb(res);
        });
    },
    deleteOne: function(column, value, cb) {
        orm.deleteOne('burgers', column, value, function(res) {
            cb(res);
        });
    }
}
// Export burger to the burgers_controller file
module.exports = burger;