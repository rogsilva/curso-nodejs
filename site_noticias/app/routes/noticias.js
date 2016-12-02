//var dbConnection = require("../../config/dbConnection");

module.exports = function(app) {

  app.get('/cadastrar-noticia', function(req, res){
    res.render('admin/form_add_noticia');
  });

  app.get('/noticias', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticias(function(error, result){
      res.render('noticias/noticias', {noticias : result});
    });
  });

  app.get('/noticia', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticia(function(error, result){
      res.render('noticias/noticia', {noticia : result});
    });
  });

  app.post('/noticias/salvar', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    var noticia = req.body;
    noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect("/noticias");
    });
  });
}
