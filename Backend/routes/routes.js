const {Router} = require('express');
const router = Router();
const postgres = require('../controller/postgres')
const clientesSchema = require('../Schemas/schemas.js');
const path = require('path')


router.get('/verinfo', (req,res)=>{
    const proyectPath = path.resolve(__dirname, '../..');
    res.sendFile(path.join(proyectPath,'Frontend','index2.html'));
})

//POSTGRESSS
router.post('/insertarCliente',postgres.insertarCliente);
router.get('/getClientes', postgres.getClientes );

router.get('/getProductos',postgres.getProductos)


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

router.post('/insertarm', async (req, res) => {
    const {numeroHijos, lugarNacimiento,email, Ubicacion, religion, hobies, deportes, estadoCivil,identificacion} = req.body;
    const tabla = "Clientes";

    try{
        const result = await client.query(`select * from "${tabla}" where "idCliente" = '${identificacion}'`);
       
        console.log(result.rows[0]);

        if(result.rows.length > 0){
            console.log("entro");
            const data = {
                "numeroHijos": numeroHijos,
                "lugarNacimiento": lugarNacimiento,
                "Ubicacion": Ubicacion,
                "religion": religion,
                "hobies": hobies,
                "deportes": deportes,
                "estadoCivil": estadoCivil,
                "email": email
            };
            for (const key in result.rows[0]) {
                data[key] = result.rows[0][key];
            }
            const cliente = new clientesSchema(data);
            await cliente.save();
            res.status(201).json(result.rows[0]);
        }
        

    }catch(err){
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;