//avisando ao node que irá trabalhar com Express
var express = require('express');
//var express = require('express')() = var app = express();
var app = express();

//passando para o node, que o EJS cuidará do html
app.set('view engine', 'ejs');

//local do arquivo
app.set('views', './app/views');

module.exports = app;