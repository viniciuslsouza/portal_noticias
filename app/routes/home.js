module.exports = function(app){

//tratativa para requisição o express passou a ter este metodo que é nativo do EJS
app.get('/', function(req, res){

	//local onde o EJS vai pegar o arquivo
 	res.render('home/index');
});
}