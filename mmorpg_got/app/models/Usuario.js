function Usuario(connection){
    this._conn = connection();
}

Usuario.prototype.cadastrar = function(usuario){
    this._conn.open(function(error, mongoClient){
        mongoClient.collection('usuarios', function(error, collection){
            collection.insert(usuario);

            mongoClient.close();
        });
    });
}

Usuario.prototype.autenticar = function(usuario, req, res){
    this._conn.open(function(error, mongoClient){
        mongoClient.collection('usuarios', function(error, collection){
            collection.find(usuario).toArray(function(error, result){
                if (result[0] != undefined) {
                    user = result[0];
                    req.session.autorizado = true;
                    req.session.usuario = user.usuario;
                    req.session.casa = user.casa;
                    res.redirect('/jogo');
                } else {
                    res.render('index', {erros:[{msg:'Usuário ou senha estão incorretos.'}]});
                }
            });

            mongoClient.close();
        });
    });
}

module.exports = function(){
    return Usuario;
}
