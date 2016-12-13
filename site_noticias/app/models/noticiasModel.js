function Noticias(connection) {
  this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback) {
  this._connection.query("select * from noticias order by data_criacao desc", callback);
}

Noticias.prototype.getNoticia = function(id, callback) {
  this._connection.query("select * from noticias where id = "+id, callback);
}

Noticias.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query("insert into noticias set ?", noticia, callback);
}

Noticias.prototype.getUltimasNoticias = function(limit, callback) {
  this._connection.query("select * from noticias order by data_criacao desc limit " + limit, callback);
}

module.exports = function() {
  return Noticias;
}
