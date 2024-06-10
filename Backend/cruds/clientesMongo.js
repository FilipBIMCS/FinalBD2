const clientesSchema = require('../Schemas/clientes');

//Obtiene todos los clientes de la base de datos

async function getClientes(req, res) {
    try {
        const clientes = await clientesSchema.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Agrega un nuevo cliente a la base de datos

async function addCliente(req, res) {
    try {
        console.log(req.body);
        const cliente = new clientesSchema(req.body);
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Actualiza la información de un cliente existente

async function updateCliente(req, res) {
    try {
        console.log('body',req.body);
        const { idCliente } = req.body;
        await clientesSchema.findOneAndUpdate({idCliente:idCliente}, req.body)
        res.json({ message: 'Cliente actualizado' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//Elimina un cliente existente de la base de datos

async function deleteCliente(req, res) {
    try {
        const { id } = req.body;
        await clientesSchema.findOneAndDelete('idCliente', id);
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//exporta las funciones definidas anteriormente para que puedan ser importadas y utilizadas en otros archivos dentro de la aplicación

module.exports = {
    getClientes,
    addCliente,
    updateCliente,
    deleteCliente
}