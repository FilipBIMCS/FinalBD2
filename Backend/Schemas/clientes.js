const mongose = require('mongoose');

const clientesSchema = new mongose.Schema({
    numeroHijos: Number,
    lugarNacimiento: String,
    FechaNacimiento: Date,
    Ubicacion: String,
    religion: String,
    hobies: String,
    deportes: String,
    estadoCivil: String,
    Nombre: String,
    Apellido: String,
    Direccion: String,
    email: String,
    Telefono: String,
    Celular: String,
    idCliente: String
});
const cliente = mongose.model('Clientes', clientesSchema, 'Clientes');

module.exports =  cliente;