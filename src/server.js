const express = require('express');

const path = require('path');
//const handle = require ('express-handlebars');

//init
const app = express() ;

const userRouter = require('./routes/user.routes.js');
const deviceRouter = require('./routes/device.routes.js');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.urlencoded({extended : false}));
app.use(express.json()); // Middleware de análisis de JSON

//global variables

//Routes
app.use(require('./routes/index.routes.js'));
app.use('/users', userRouter);
app.use('/devices', deviceRouter);
// static files
app.use(express.static(path.join(__dirname,'public')));
module.exports =app;