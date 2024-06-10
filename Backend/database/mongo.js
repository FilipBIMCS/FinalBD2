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

const productosSchema = require('../Schemas/productos'); // Importa el esquema de productos

async function deleteProducto(req, res) {
    try {
        const { id } = req.params; // Obtén el ID del producto de los parámetros de la solicitud
        await productosSchema.findByIdAndDelete(id); // Busca y elimina el producto por su ID
        res.json({ message: 'Producto eliminado' }); // Envía una respuesta JSON indicando que el producto ha sido eliminado
    } catch (error) {
        res.status(500).json({ error: error.message }); // Si ocurre un error, envía una respuesta de error con el mensaje de error
    }
}

module.exports = { deleteProducto };


module.exports = { connect };