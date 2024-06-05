const client = require('../database/postgres.js');


async function getAll(req,res){
    try {
        console.log('entro')
        const result = await client.query('SELECT * FROM "Productos"');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function insertOne (req,res){
    try {
        const {idProducto, PrecioVenta,Descripcion, CantDisponible,Costo,Cod_Categoria} = req.body;
        const result = await client.query('INSERT INTO "Productos" VALUES ($1, $2, $3, $4,$5,$6) RETURNING *', [idProducto,Descripcion,CantDisponible,Costo,PrecioVenta,Cod_Categoria]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAll,
    insertOne,
    deleteById,
    getById
}