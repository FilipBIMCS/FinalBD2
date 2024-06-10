const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const mongo = require('./database/mongo.js');



//configura y arranca un servidor, y luego informa en la consola que el servidor
// esta listo y en que direccion se puede acceder a el
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

mongo.connect();



//parseo del body

//leer los datos enviados desde formularios HTML
app.use(express.urlencoded({ extended: true }));

//Leer y manejar datos en formato JSON. 
app.use(bodyParser.json());

//aceptar solicitudes de cualquier origen
app.use(cors(({ origin: '*' })));

//manejar las solicitudes 
app.use(express.json());


//frontend
//ruta al directorio Frontend
const proyectPath = path.resolve(__dirname, '../Frontend');
app.use(express.static(path.resolve(proyectPath)));


// Rutas al directorio tu API
const router =require('./routes/routes.js');
app.use('/', router);