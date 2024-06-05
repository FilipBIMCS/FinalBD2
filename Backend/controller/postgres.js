
const clientes =require('../cruds/clientes')
const productos =require('../cruds/productos')
const categorias =require('../cruds/categorys')

function getClientes (req,res){
    clientes.getAll(req,res)
}

function insertarCliente(req,res){
    clientes.insertOne(req,res)
}

function getProductos(req,res){
    productos.getAll(req,res)
}

function getCategory(req,res){
    categorias.getAll(req,res)
}


function getCategoryById(req,res){
    categorias.getOne(req,res)
}

function createCategory(req,res){
    categorias.create(req,res)
}

function createProduct(req,res){
    productos.insertOne(req,res)
}

module.exports  ={
    getClientes,
    insertarCliente,
    getProductos,
    getCategoryById,
    getCategory,
    createCategory,
    createProduct
}