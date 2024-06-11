//biblioteca de Node.js modelar los datos con MongoDB.
const mongoose = require('mongoose');
//conecta a la bd
const uri = "mongodb://localhost:27017/Info_Clientes";

//establecer una conexion a la bd
function connect() {
    mongoose.connect(uri)
        .then(() => {
            console.log('Conectado a la base de datos');
        })
        .catch((error) => {
            console.error('Error de conexión', error);
        });
}

module.exports = { connect };