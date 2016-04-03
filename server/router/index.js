module.exports = function (app) {

    // The signup route
    console.log("router is loading");
    app.use('/climate', require('./routes/climate'));
};