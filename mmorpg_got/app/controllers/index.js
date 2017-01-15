module.exports.index = function(application, req, res){
    res.render('index', {erros:{}});
}

module.exports.autenticar = function(application, req, res){

    var dadosForm = req.body;

    req.assert('usuario', 'O campo usuário é obrigatório.').notEmpty();
    req.assert('senha', 'O campo senha é obrigatória.').notEmpty();

    var erros = req.validationErrors();
    if (erros) {
        res.render('index', {erros:erros});
        return;
    }

    var connection = application.config.database;
    var usuarioModel = new application.app.models.Usuario(connection);

    usuarioModel.autenticar(dadosForm, req, res);    
}
