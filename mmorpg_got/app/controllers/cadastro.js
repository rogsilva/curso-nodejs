module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {erros:{}, dadosForm:{}});
}

module.exports.cadastrar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('nome', 'O campo nome é obrigatório.').notEmpty();
    req.assert('usuario', 'O campo usuário é obrigatório.').notEmpty();
    req.assert('senha', 'O campo senha é obrigatório.').notEmpty();
    req.assert('casa', 'Selecione uma casa.').notEmpty();

    var erros = req.validationErrors();
    if (erros) {
        res.render('cadastro', {erros:erros, dadosForm:dadosForm});
        return;
    }

    var connection = application.config.database;
    var usuarioModel = new application.app.models.Usuario(connection);
    var jogoModel = new application.app.models.Jogo(connection);

    usuarioModel.cadastrar(dadosForm);
    jogoModel.gerarParametros(dadosForm.usuario);
    res.redirect('/');
}
