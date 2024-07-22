//index.js
require("dotenv").config();
 

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "funcionando"
    })

})

app.get("/marcas", async (req, res) => {
    const marcas = await db.selectMarcas();
    res.json(marcas);
})


app.listen(port);

console.log("rodado");