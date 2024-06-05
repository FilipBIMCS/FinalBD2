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

async function deleteById(req, res) {
    try {
        const { idProducto } = req.params;
        const result = await client.query('DELETE FROM "Productos" WHERE "idProducto" = $1 RETURNING *', [idProducto]);
        if (result.rowCount === 0) {
            res.status(404).json({ message: 'Producto no encontrado' });
        } else {
            res.status(200).json({ message: 'Producto eliminado', producto: result.rows[0] });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
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
    createProducto
}
