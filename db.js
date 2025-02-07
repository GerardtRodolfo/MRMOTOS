async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    });

    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

connect();

async function selectMarcas(){
    const client = await connect(); /* pedir conexao com o banco*/
    const res = await client.query("SELECT * FROM cr_marca"); /*enviar comando sql para o banco*/
    return res.rows; /* rows são as linhas retornadas do sql*/
}

module.exports = {
    selectMarcas
}