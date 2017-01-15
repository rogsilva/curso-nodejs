module.exports.jogo = function(application, req, res){
    if (req.session.autorizado !== true) {
        res.redirect('/');
    }

    var connection = application.config.database;
    var jogoModel = new application.app.models.Jogo(connection);
    var dadosJogo = jogoModel.iniciaJogo(req, res);
}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(){
        res.redirect('/');
    });
}
