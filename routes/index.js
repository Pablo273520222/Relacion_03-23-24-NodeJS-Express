var express = require('express');
var router = express.Router();
const multiplicar = require('../helpers/multiplicar');
const generarQuiniela = require('../helpers/generarQuiniela');

router.get('/', function(req, res, next) {
  res.render('index', {
  title: 'Ejercicios Express 1',
  name: 'Tabla de Multiplicar desde el sitio /' });
});

router.post('/multiplicar', async function (req, res, next) {
  const base = parseInt(req.body.base);

  try {
    const tablaHTML = await multiplicar(base);
    res.send(tablaHTML);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/multiplicar', function(req, res, next) {
  res.render('multiplicar', {
  title: 'Ejercicios Express-2',
  name: 'Tabla de Multiplicar desde el sitio /multiplicar'
 });
});

router.get('/generarQuiniela', function(req, res, next) {
  const quiniela = generarQuiniela();
  res.render('generarQuiniela', { 
    title: 'Ejercicios Express-3',
    name: 'Quiniela de fútbol:',
    quiniela
  });
});

router.post('/generarQuiniela', function(req, res, next) {
  const quiniela = generarQuiniela();
  res.json(quiniela);
});


module.exports = router;
