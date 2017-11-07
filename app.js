var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormularioInclusao = require('./app/routes/formulario_inclusao')(app);


//setando a porta que irá escutar o node através do modulo do express
app.listen(3000, function(){

	console.log("Servidor rodando com express");
});