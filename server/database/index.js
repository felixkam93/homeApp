var pg = require('pg');
var anyDB = require('any-db')
var climateModel = require('./schema/climate')
//var climate = climateModel.climateSchema;

// Connections
var developmentDb = 'postgres://postgres:abcd1234@192.168.1.6/postgres';
var productionDb = '';
var usedDb;
var pool = {};

console.log("process.env.NODE_ENV: \n" + process.env.NODE_ENV);
console.log("process.env: \n" + JSON.stringify(process.env));
//console.log(":\n" + JSON.stringify(NODE_ENV));
// If we're in development...
if (process.env.NODE_ENV.replace(/\s+/g, '') === 'development') {
    // set our database to the development one
    console.log("building connection to db dev mode");
    usedDb = developmentDb;
    // connect to it via mongoose

    pool = anyDB.createPool(usedDb, {min: 2, max: 20})
    var q = pool.query('SELECT 1', function (err, res) {
        if(err){
            console.log(err);
        }else
        {
            console.log(res);
        }

    })

}

// If we're in production...
if (process.env.NODE_ENV.replace(/\s+/g, '') === 'production') {
    // set our database to the development one
    usedDb = productionDb;
    // connect to it via mongoose
    //var pool = anyDB.createPool(usedDb, {min: 2, max: 20})
}
console.log(pool);
exports.clientPool = pool;
exports.climate = climateModel;
