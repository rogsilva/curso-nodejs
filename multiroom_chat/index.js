var application = require('./config/server');

application.listen(8080, function(){
  console.log('Servidor online');
});
