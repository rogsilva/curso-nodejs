//var dbConnection = require("../../config/dbConnection");

module.exports = function(app) {

  app.get('/cadastrar-noticia', function(req, res){
    res.render('admin/form_add_noticia');
  });

  app.get('/noticias', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;
    noticiasModel.getNoticias(connection, function(error, result){
      res.render('noticias/noticias', {noticias : result});
    });
  });

  app.get('/noticia', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;
    noticiasModel.getNoticia(connection, function(error, result){
      res.render('noticias/noticia', {noticia : result});
    });
  });

  app.post('/noticias/salvar', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;

    var noticia = req.body;
    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
      res.redirect("/noticias");
    });
  });
}
