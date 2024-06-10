const clientes = require('../cruds/clientesMongo');
const products = require('../cruds/productosMongo');

//Función que elimina un producto

async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        await productosSchema.findOneAndDelete({ id: id });
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
//Función para Insertar un Cliente
function insertCliente(req, res) {
    clientes.addCliente(req, res);
}
//Función para Obtener Clientes
function getClientes(req, res) {
    clientes.getClientes(req, res);
}
//Función para Actualizar un Cliente
function updateCliente(req,res){
    clientes.updateCliente(req,res);
}
//Función para Eliminar un Cliente
function deleteCliente(req, res) {
    console.log("deleteCliente");
    clientes.deleteCliente(req, res);
}
//Función para Crear un Producto
function createProduct(req, res) {
    products.createProducto(req, res);
}
//Aquí se exportan las funciones
module.exports = {
    insertCliente,
    getClientes,
    deleteCliente,
    createProduct,
    deleteProductById, // Asegúrate de que deleteProducto esté dentro del objeto exportado
    updateCliente
};
