// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const mongoose = require('mongoose');
const uri = "mongodb+srv://globalinnovisionsystems:WeernzXOT6BkClm9@marketplace.omqkbxf.mongodb.net/marketplace?retryWrites=true&w=majority&appName=marketplace";
const uri2 = "mongodb://8.tcp.ngrok.io:18652/?directConnection=true";

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