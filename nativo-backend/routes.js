const router = require('express').Router();
const conexion = require('./config/database');

//Retorna todos los campos de la tabla "tareas" organizados por estado, primero los que están pendientes, y por id, primero los más antiguos
router.get('/', function (req, res) {
    let sql = 'select * from tareas ORDER BY tareas.estado ASC, tareas.id ASC';

    //A través de la constante conexión, se ejecuta la consulta SQL
    //Recibe la consulta SQL y una funcion como callback para el manejo de la respuesta
    conexion.query(sql, (err, rows, fields) => {

        //Si la consulta resulta en un error, se lanza dicho error
        //Si el resultado no es un error, se responde con las filas devueltas por la base de datos
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

//Recibe un "id" como parametro en la URL y retorna todos los valores correspondientes a dicha tarea
router.get('/:id', function (req, res) {

    //Se obtiene el parametro "id" de la URL
    const { id } = req.params;

    let sql = 'SELECT * FROM tareas WHERE id = ?';

    //Recibe la consulta SQL, un valor para usar en reemplazo del caracter ? de la consulta, 
    //y una funcion como callback para el manejo de la respuesta
    conexion.query(sql, [id], (err, rows, fields) => {

        //Si el resultado no es un error, se responde con la fila devuelta por la base de datos
        if (err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});

//Recibe los valores del body de la petición y crea una nueva tarea, para al final retornar una respuesta de éxito
router.post('/', function (req, res) {

    //Se obtienen los valores que contiene el body de la petición
    const { nombre, descripcion, creador } = req.body;

    //Se inicializa la variable con una cadena a la cual se concatenan los valores de las variables anteriores
    let sql = `INSERT INTO tareas (nombre, descripcion, creador) VALUES('${nombre}','${descripcion}','${creador}')`;
    
    conexion.query(sql, (err, rows, fields) => {

        //Si el resultado no es un error, se retornar una respuesta de éxito
        if (err) {
            throw err;
        } else {
            res.json({ status: 'Tarea agregada' });
        }
    });
});

router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, creador } = req.body;

    let sql = `UPDATE tareas SET nombre='${nombre}', descripcion='${descripcion}', creador='${creador}' WHERE id='${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'Tarea actualizada!' });
        }
    });
});

router.put('/status', (req, res) => {
    
    const { id } = req.body;
    const estadoActual = null;
    
    let sql = 'SELECT id, estado FROM tareas WHERE id=?';

    conexion.query(sql, [id], (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            
            if (rows[0]['estado'] == 1) {
                updateEstado(id, 0)
            }else{
                updateEstado(id, 1)
            }
            
            res.json({ status: 'Estado actualizado!' });
        }
    });
});

function updateEstado(id, estado) {

    let sql = `UPDATE tareas SET estado='${estado}' WHERE id='${id}'`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        }
    });
}

module.exports = router;