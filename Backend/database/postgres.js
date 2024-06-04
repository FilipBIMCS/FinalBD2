const postgress = require('pg');


const credenciales = new postgress.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432
});

credenciales.connect().then(() => {
    console.log('Conectado a la base de datos postgres');
}).catch((error) => {
    console.error('Error de conexión', error);
});

module.exports = credenciales;