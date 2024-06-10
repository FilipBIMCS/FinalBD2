const productosSchema = require('../Schemas/productos');

//Crea un nuevo producto en la base de datos Mongo

async function createProducto(req, res) {
    try {
        const data = req.body;
        const producto = new productosSchema(data);
        await producto.save();
        res.status(200).json({ message: 'Producto creado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}

//Elimina un producto de la base de datos MongoDB por su ID

async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        await productos.deleteProductById(id);
        res.json({ message: 'Producto eliminado por ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Obtiene un producto de la base de datos SQL por su ID

async function getById(req, res) {
    try {
        const { idProducto } = req.params;
        const result = await client.query('SELECT * FROM "Productos" WHERE "idProducto" = $1', [idProducto]);
        if (result.rowCount === 0) {
            res.status(404).json({ message: 'Producto no encontrado' });
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//exporta las funciones definidas anteriormente para que puedan ser importadas y utilizadas en los otros archivos dentro de la aplicación

module.exports = {
    createProducto,
    deleteProductById
}
