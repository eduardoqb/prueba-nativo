require('./config/database');

const express = require('express');
const port = (process.env.port || 3000);

const app = express();

app.use(express.json());

app.set('port', port);

app.use('/api', require('./routes'));

app.listen(app.get('port'), (err) => {
    if (err) {
        console.log('Error al iniciar el servidor!');
    } else {
        console.log('Servidor iniciado en el puerto ' + port);
    }
});

