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

module.exports = {
    createProducto
}
