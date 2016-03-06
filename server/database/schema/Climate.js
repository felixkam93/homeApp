/**
 * Created by Felix on 19.02.2016.
 */
var db = require('../../database');
//var pool = db.clientPool.ConnectionPool;

//get sql

var climateSchema = {};

climateSchema.get = function(req, callback){
    console.log(req.query);
    var rowLimit = req.query.rowLimit;
    var rowOffset = req.query.rowOffset;
    db.clientPool.query("SELECT * FROM TEMPHUM LIMIT $1 OFFSET $2", [rowLimit,rowOffset], function(err, resDB) {
        return callback(err, resDB);
    });
}
module.exports = climateSchema;
//post method