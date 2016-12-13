module.exports.index = function (app, req, res) {
  var connection = app.config.dbConnection();
  var noticiasModel = new app.app.models.noticiasModel(connection);
  noticiasModel.getUltimasNoticias(5, function(error, result){
    res.render('home/index', {noticias : result});
  });
}
