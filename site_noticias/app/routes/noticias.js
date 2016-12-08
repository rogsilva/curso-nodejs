//var dbConnection = require("../../config/dbConnection");
module.exports = function(application) {

  application.get('/cadastrar-noticia', function(req, res){
    application.app.controllers.noticias.cadastrar(application, req, res);
  });

  application.get('/noticias', function(req, res){
    application.app.controllers.noticias.listar(application, req, res);
  });

  application.get('/noticia', function(req, res){
    application.app.controllers.noticias.getId(application, req, res);
  });

  application.post('/noticias/salvar', function(req, res){
    application.app.controllers.noticias.salvar(application, req, res);
  });
}
