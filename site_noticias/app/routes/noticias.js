//var dbConnection = require("../../config/dbConnection");

module.exports = function(app) {

  app.get('/cadastrar-noticia', function(req, res){
    res.render('admin/form_add_noticia', {erros: {}, noticia: {}});
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

    req.assert('titulo', 'O título é obrigatório').notEmpty();
    req.assert('resumo', 'O Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'O Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'O Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'A Data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'A notícia é obrigatória').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
      res.render('admin/form_add_noticia', {erros: erros, noticia: noticia});
      return;
    }

    noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect("/noticias");
    });
  });
}
