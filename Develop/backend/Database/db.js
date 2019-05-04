const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'basededatos-service', //ESTE ES EL NOMBRE DE CONTENEDOR EN EL AMBIENTE DE DESARROLLO
    user     : 'root',
    password : 'root',
    database : 'banco'
  });

module.exports = connection;
