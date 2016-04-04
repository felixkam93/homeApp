var express = require('express');
var router = express.Router();
//var db = require('../../database');
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
router.get('/day', function(req, res){
    var climateValues;
    var timestamps;
    climate.getDay(req, function(err, resClimateValues){
        if(err){
            console.log("Problem getting climate data due to " + err);
            res.status(500).json({
                'message': 'Database error trying to recieve data.'
            });
        }else{
            console.log(this.resClimateValues);
            climateValues = resClimateValues;
            //res.status(201).json(resDB);

        }
    });
    console.log(climateValues);
    /*climate.getHoursOfDay(req, function(err, resTimestamps){
        if(err){
            console.log("Problem getting climate data due to " + err);
            res.status(500).json({
                'message': 'Database error trying to recieve data.'
            });
        }else{
            console.log(resTimestamps);
            timestamps = resTimestamps;
        }
    });*/
    console.log(climateValues);
    console.log(timestamps);
    res.status(201).json(climateValues + timestamps);
});
module.exports = router;
