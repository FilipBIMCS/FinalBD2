const mongoose = require('mongoose')

const productosSchema = new mongoose.Schema({
    id: Number,
    Descripcion: String,
    Precio: Number,
    Cantidad: Number,
    Categoria: Object,
    costo: Number,
    PrecioVenta: Number
})

module.exports = mongoose.model('productos', productosSchema,'productos')


