module.exports = function (app) {

    // The signup route
    app.use('/climate', require('./routes/climate'));
}