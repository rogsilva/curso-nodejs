module.exports = function(app) {
  app.get('/cadastrar-noticia', function(req, res){
    res.render('admin/form_add_noticia');
  });

  app.get('/noticias', function(req, res){
    res.render('noticias/noticias');
  });

  app.get('/noticia', function(req, res){
    res.render('noticias/noticia');
  });
}
