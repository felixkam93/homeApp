/**
 * Created by Felix on 19.02.2016.
 */
var db = require('../../database');
//var pool = db.clientPool.ConnectionPool;

//get sql

var climateSchema = {};

climateSchema.get = function(req, callback){
    console.log("entering climate get");
    console.log(req.query);
    var rowLimit = req.query.rowLimit;
    var rowOffset = req.query.rowOffset;
    db.clientPool.query("SELECT * FROM TEMPHUM LIMIT $1 OFFSET $2", [rowLimit,rowOffset], function(err, resDB) {
        return callback(err, resDB);
    });
}

climateSchema.getClimateValuesForDay = function(req, callback){
    console.log("entering climate getDay");
    console.log(req.query);
    var dayDate = req.query.dayDate;
    var temperatureValues = [];
    var humidityValues = [];
    var resultClimaValues = {};

   /* var resDB = db.clientPool.query("SELECT * FROM TEMPHUM WHERE date_trunc('day',timestamp) = $1", [dayDate]).on('data', function(row){
        console.log(row);
        console.log(req.query);
    });*/
    //SELECT DISTINCT date_trunc('hour',timestamp) FROM TEMPHUM WHERE date_trunc('day',timestamp) = '2016-03-29' ORDER BY date_trunc('hour',timestamp)
    db.clientPool.query("SELECT * FROM TEMPHUM WHERE date_trunc('day',timestamp) = $1", [dayDate], function(err, resDB) {
        resDB.rows.forEach(function(row, index) {
            console.log(row);
            if(row.temperature){
                temperatureValues.push(parseFloat(row.temperature));
            }
            if(row.humidity){
                humidityValues.push(parseFloat(row.humidity));
            }
        });
        console.log("temp value count: " + temperatureValues.length);
        console.log("hum value count: " + humidityValues.length);
        resultClimaValues.temperatureValues = temperatureValues;
        resultClimaValues.humidtyValues = humidityValues;
        console.log("resultclimaValues: \n" + resultClimaValues);
        //resultClimaValues = JSON.stringify(resultClimaValues);
        console.log(resultClimaValues);
        return callback(err, [temperatureValues, humidityValues]);
    });


}

climateSchema.getHoursOfDay = function(req, callback){
    console.log("entering climate getHoursOfDay");
    var dayDate = req.query.dayDate;
    var timestampsObj = {};
    var truncedTimestamps = [];
    //SELECT DISTINCT date_trunc('hour',timestamp) FROM TEMPHUM WHERE date_trunc('day',timestamp) = '2016-03-29' ORDER BY date_trunc('hour',timestamp)
    db.clientPool.query("SELECT DISTINCT date_trunc('hour',timestamp) FROM TEMPHUM WHERE date_trunc('day',timestamp) = $1 ORDER BY date_trunc('hour',timestamp)", [dayDate], function(err, resDB) {
        resDB.rows.forEach(function(row, index) {

            if(row.date_trunc){
                truncedTimestamps.push(row.date_trunc);
            }
        });
        console.log("trunc_timestamps count:" + truncedTimestamps.length);
        //truncedTimestamps = JSON.stringify(truncedTimestamps);
        return callback(err, truncedTimestamps);
    });
}
module.exports = climateSchema;
//post method
