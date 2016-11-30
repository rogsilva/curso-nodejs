var app = require('./config/server');

//Caso não use o consign as rotas são incluidas desta forma
//require('./app/routes/home')(app);
//require('./app/routes/noticias')(app);

app.listen(3000, function(){
  console.log('Express rodando');
});
