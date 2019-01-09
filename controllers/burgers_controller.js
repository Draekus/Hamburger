// Import Express
const express = require('express');
// Import the burger.js model
const burger = require('../models/burger');
// Create a router through express
const router = express.Router();

// The get http request on the "/" url which runs the selectAll orm query as a callback function
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        // The object that handlebars will use to generate burger items
        burgerData = {
            burgers: data
        }
        console.log(`HandleBars Object From Get Request:  ${JSON.stringify(burgerData)}`);
        // Render the index view on the frontend with the new data retrieved from burger.selecAll
        res.render("index", burgerData);
    })
});

// The post request on the url "/api/burgers" which adds a burger to the database through burger.insertOne
router.post('/api/burgers', function(req, res) {
    let value = req.body.burger_name;
    let column = 'burger_name';
    // let value2 = "0";
    // let column2 = 'devoured'
    
    burger.insertOne(column, value, function(result) {
        // Send back the ID of the burger that was just added to the database
        res.json({ id: result.insertId });
    })
});

// The put request on the url "/api/burgers" which will change the devoured status on a chosen burger through the burger.updateOne call
router.put('/api/burgers', function(req, res) {
    let column = 'devoured';
    let updatedValue = req.body.devoured;
    let id = 'id';
    let idValue = req.body.id;

    burger.updateOne(column, updatedValue, id, idValue, function(result) {
        // Logic to handle if the selected burger actually exists in the database
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    }),

router.delete('/api/burgers/:id', function(req, res) {
    let column = 'id';
    let value = req.param.id;
    burger.deleteOne(column, value, function(result) {
        console.log(result)
        res.render("index", burgerData)
    });
})
});

// Exports routes to the server.js file
module.exports = router;