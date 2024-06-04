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


module.exports ={
    getAll
}