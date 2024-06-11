const {Router} = require('express');
const router = Router();
const postgres = require('../controller/postgres')
const mongo = require('../controller/mongo')

const path = require('path')


router.get('/verinfo', (req,res)=>{
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath,'Frontend','index2.html'));
})

//POSTGRESSS
router.post('/insertarCliente',postgres.insertarCliente);
router.post('/addCategory',postgres.createCategory);
router.post('/addProduct',postgres.createProduct);
router.get('/getClientes', postgres.getClientes );

router.get('/getCategory',postgres.getCategory)
router.get('/getCategoryByid/:id',postgres.getCategoryById)

//puente entre la bd y la pagina
router.post('/insertar', async (req, res) => {
    const { name, value } = req.body;
    const tabla = "Categorias";
    try {
        const result = await client.query(`INSERT INTO "${tabla}" VALUES ('${name}', '${value}')`);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//MONGO

router.post('/insertarm',mongo.insertCliente);
router.get('/getClientesm',mongo.getClientes);
router.delete('/borrarCliente',mongo.deleteCliente);
router.put('/updateClient',mongo.updateCliente)//pone
router.post('/addProductm',mongo.createProduct);//crear
router.get('/getProductos',mongo.getProductos)

module.exports = router;