module.exports.chat = function(application, req, res) {
  var dados = req.body;

  req.assert('apelido', 'O campo apelido é obrigatório!').notEmpty();
  req.assert('apelido', 'O campo apelido deve ter de 3 a 15 caracteres!').len(3, 15);

  var erros = req.validationErrors();

  if (erros) {
    res.render('index', {erros : erros});
    return;
  }

  res.render('chat');
}
