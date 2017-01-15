function Jogo(connection){
    this._conn = connection();
}

Jogo.prototype.gerarParametros = function (usuario) {
    this._conn.open(function(error, mongoClient){
        mongoClient.collection('jogo', function(error, collection){
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor(Math.random() * 1000),
                sabedoria: Math.floor(Math.random() * 1000),
                comercio: Math.floor(Math.random() * 1000),
                magia: Math.floor(Math.random() * 1000)
            });

            mongoClient.close();
        });
    });
};

Jogo.prototype.iniciaJogo = function (req, res) {
    this._conn.open(function(error, mongoClient){
        mongoClient.collection('jogo', function(error, collection){
            collection.find({usuario : req.session.usuario}).toArray(function(error, result){

                res.render('jogo', {casa: req.session.casa, jogo: result[0]});
            });

            mongoClient.close();
        });
    });
}

module.exports = function(){
    return Jogo;
}
