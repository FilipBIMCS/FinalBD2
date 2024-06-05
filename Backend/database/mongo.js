// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/Info_Clientes";

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