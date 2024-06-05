const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const mongo = require('./database/mongo.js');




const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

mongo.connect();



//parseo del body
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(({ origin: '*' })));
app.use(express.json());


//frontend
const proyectPath = path.resolve(__dirname, '../Frontend');
app.use(express.static(path.resolve(proyectPath)));


// Rutas de tu API
const router =require('./routes/routes.js');
app.use('/', router);