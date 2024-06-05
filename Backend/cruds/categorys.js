const client = require('../database/postgres.js');


async function getAll(req, res) {
    console.log('GET /categorys');
    try {
        const result = await client.query('SELECT * FROM "Categoria_productos"');
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Categories not found' });
    }
}

async function getOne(req, res) {
    try {
        const id = req.params.id;
        console.log('GET /categorys/' + id);
        const result = await client.query('SELECT * FROM "Categoria_productos" WHERE "Codigo" = $1', [id]);
        console.log(result.rows);
        if(result.rows.length === 0) {
            res.status(404).json('Category not found');
            return;
        }else{
            res.status(200).json(result.rows);
        } 
    } catch (err) {
        console.log(err);
        res.status(400).json('error al traer la data');
    }
}

async function create(req, res) {
    try {
        const { Cod_Categoria, Descripcion} = req.body;
        console.log('POST /categorys');
        const result = await client.query('INSERT INTO "Categoria_productos" VALUES ($1,$2) RETURNING *', [Cod_Categoria, Descripcion]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(400).json('error al crear la categoria');
    }
}

module.exports = {
    getAll,
    getOne,
    create
}