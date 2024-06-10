const productosSchema = require('../Schemas/productos');


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

async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        await productos.deleteProductById(id);
        res.json({ message: 'Producto eliminado por ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


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



module.exports = {
    createProducto,
    deleteProductById
}
