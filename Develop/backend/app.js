var express = require('express');
var sleep = require('system-sleep');
var cons = require('./Database/db');


//ESTE ES UN COMENTARIO
var app = express();
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//UTILIZANO EL BODY PARSER
var bodyparser = require('body-parser');

//SETEANDO EL BODY PARSER
app.use(bodyparser());

//TRAYENDO LAS RUTAS DEFINIDAS
var routes = require('./Routes/routes');
app.use('/', routes);

var server = app.listen(8000, function(){
    console.log("Escuchando en puerto 8000");
    cons.connect();
});
