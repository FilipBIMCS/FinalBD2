const client = require('../database/postgres.js');

async function getAll(req,res){
    try {
        console.log('entro')
        const result = await client.query('SELECT * FROM "Clientes"');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function insertOne(req,res){

    console.log(req.body)
    const query = {
        text: 'INSERT INTO "Clientes"("idCliente","Nombre","Apellido","Direccion","FechaNacimiento","email","Telefono","Celular") VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
        values: [req.body.identificacion,req.body.nombre, req.body.apellido,req.body.direccion,req.body.fechaNacimiento, req.body.email, req.body.telcasa, req.body.cel],
    };
    console.log(query)
    try {
        const result = await client.query(query);
        res.status(200).json({ message: 'Cliente insertado' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}
module.exports ={
    getAll,
    insertOne
}