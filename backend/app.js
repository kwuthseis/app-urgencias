'use strict'

const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

var app = express();

// cargar rutas
var paciente_rutas = require('./routes/paciente');
var usuario_rutas = require('./routes/usuario');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Configurar cabeceras http



// rutas base
app.use('/api', paciente_rutas);
app.use('/api', usuario_rutas);

app.get('/pruebas', function(req,res){
    res.status(200).send({message: 'Bienvenidos a Urgencias.'});
});

module.exports = app;
