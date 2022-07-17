const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nativo-db'
});

conexion.connect((err)=>{
    if(err){
        console.log('Error de conexión a la base de datos!');
    }else{
        console.log('Base de datos conectada!');
    }
});

module.exports = conexion;