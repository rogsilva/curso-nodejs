var application = require('./config/server');

var server = application.listen(3000, function(){
  console.log('Servidor online');
});

var io = require('socket.io').listen(server);

application.set("io", io);

io.on("connection", function(socket){
    console.log("O usuário conectou!");

    socket.on("disconnect", function(){
        console.log("O usuário saiu!");
    });

    socket.on("mensagemDoUsuario", function(data){
        /*Atualiza mensagens*/
        socket.emit("mensagemParaUsuario",{
            apelido : data.apelido,
            msg : data.msg
        });

        socket.broadcast.emit("mensagemParaUsuario",{
            apelido : data.apelido,
            msg : data.msg
        });

        /*Atualiza participantes*/
        if (parseInt(data.apelido_atualizado) == 0) {
            socket.emit("participantesParaUsuario",{
                apelido : data.apelido
            });
            socket.broadcast.emit("participantesParaUsuario",{
                apelido : data.apelido
            });
        }
    });
});
