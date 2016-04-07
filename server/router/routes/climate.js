var express = require('express');
var router = express.Router();
//var db = require('../../database');
var climate =  require('../../database/schema/climate');

router.get('/', function(req, res, next){

    climate.get(req, function(err, resDB){
        if(err){
            console.log("Problem getting climate data due to " + err);
            next(err);
        }else{
            res.status(201).json(resDB);
        }
    });
});

var getClimateValuesForDay = function(req, res, next){
    climate.getClimateValuesForDay(req, function(err, resClimateValues){
        if(err){
            console.log("Problem getting climate data due to " + err);
            next(err);
        }else{
            req.humidity = resClimateValues[1];
            req.temperature = resClimateValues[0];
            next();
        }
    });

};
var getHoursOfDay = function(req, res, next){
    climate.getHoursOfDay(req, function(err, resTimestamps){
        if(err){
            console.log("Problem getting climate data due to " + err);
            next(err);
        }else{
            req.timestamps = resTimestamps;
            next();
        }
    });

};

router.get('/day',[getClimateValuesForDay, getHoursOfDay],function (req, res, next){
    res.status(201).json([req.temperature, req.humidity, req.timestamps] );

});

module.exports = router;
