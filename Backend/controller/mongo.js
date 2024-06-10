const clientes = require('../cruds/clientesMongo');
const products = require('../cruds/productosMongo');


async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        await productosSchema.findOneAndDelete({ id: id });
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function insertCliente(req, res) {
    clientes.addCliente(req, res);
}

function getClientes(req, res) {
    clientes.getClientes(req, res);
}

function updateCliente(req,res){
    clientes.updateCliente(req,res);
}

function deleteCliente(req, res) {
    console.log("deleteCliente");
    clientes.deleteCliente(req, res);
}

function createProduct(req, res) {
    products.createProducto(req, res);
}

module.exports = {
    insertCliente,
    getClientes,
    deleteCliente,
    createProduct,
    deleteProductById, // Asegúrate de que deleteProducto esté dentro del objeto exportado
    updateCliente
};
