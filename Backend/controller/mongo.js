const clientes = require('../cruds/clientesMongo');
const products = require('../cruds/productosMongo');


function insertCliente(req, res) {
    clientes.addCliente(req, res);
}

function getClientes(req, res) {
    clientes.getClientes(req, res);
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
    createProduct
}