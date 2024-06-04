
const clientes =require('../cruds/clientes')
const productos =require('../cruds/productos')

function getClientes (req,res){
    clientes.getAll(req,res)
}

function insertarCliente(req,res){
    clientes.insertOne(req,res)
}

function getProductos(req,res){
    productos.getAll(req,res)
}

module.exports  ={
    getClientes,
    insertarCliente,
    getProductos
}