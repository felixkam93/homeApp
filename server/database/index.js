var pg = require('pg');
var anyDB = require('any-db')
var climateModel = require('./schema/climate')
//var climate = climateModel.climateSchema;

// Connections
var developmentDb = 'postgres://postgres:abcd1234@192.168.1.6/postgres';
var productionDb = 'postgres://postgres:abcd1234@192.168.1.6/postgres';
var usedDb;
var pool = {};

// If we're in development...
if (process.env.NODE_ENV.replace(/\s+/g, '') === 'development') {
    // set our database to the development one
    console.log("building connection to db dev mode");

    pool = anyDB.createPool(developmentDb, {min: 2, max: 20});
    var q = pool.query('SELECT 1', function (err, res) {
        if(err){
            console.log("Error:\n");
            console.log(err);
        }else
        {
            console.log("Connection established!\n");
            //console.log(res);
        }

    })

}

// If we're in production...
if (process.env.NODE_ENV.replace(/\s+/g, '') === 'production') {

    pool = anyDB.createPool(productionDb, {min: 2, max: 20});
    var q = pool.query('SELECT 1', function (err, res) {
        if(err){
            console.log("Error:\n");
            console.log(err);
        }else
        {
            console.log("Connection established!\n");
            //console.log(res);
        }

    });
}
console.log(pool);
exports.clientPool = pool;
exports.climate = climateModel;
