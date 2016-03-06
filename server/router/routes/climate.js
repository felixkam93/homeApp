// Include Express
var express = require('express');
// Initialize the Router
var router = express.Router();
var db = require('../../database');
var climate =  require('../../database/schema/climate');


router.get('/', function(req, res){
    climate.get(req, function(err, resDB){
        if(err){
            console.log("Problem getting climate data due to " + err);
            res.status(500).json({
                'message': 'Database error trying to recieve data.'
            });
        }else{
            console.log(resDB.rows);
             res.status(201).json(resDB);
        }
    });
});

// Expose the module
module.exports = router;