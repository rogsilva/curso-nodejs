var dbConnection = require("../../config/dbConnection");

module.exports = function(app) {
  var connection = dbConnection();

  app.get('/cadastrar-noticia', function(req, res){
    res.render('admin/form_add_noticia');
  });

  app.get('/noticias', function(req, res){
    connection.query("select * from noticias", function(error, result){
      res.render('noticias/noticias', {noticias : result});
    });
  });

  app.get('/noticia', function(req, res){
    res.render('noticias/noticia');
  });
}
