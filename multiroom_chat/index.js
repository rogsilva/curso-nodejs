var application = require('./config/server');

var server = application.listen(8080, function(){
  console.log('Servidor online');
});

require('socket.io').listen(server);
