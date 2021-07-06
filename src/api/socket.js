const uuid = require('uuid');

// main socket api
module.exports = {

    connectionMethods : function(socket){

        let connectTime = Date.now();
        let serverMsg = {
            'dt'  : connectTime,
            'mid' : uuid.v4(),
            'msg' : 'Hello World!',
        };

        socket.emit('server_msg', serverMsg)
    
        socket.on('client_msg', function(data){
            let msgTime = Date.now();
            let serverMsg = {
                'dt'  : msgTime,
                'mid' : uuid.v4(),
                'msg' : String(data.msg).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''),
            };

            console.log('server message:', serverMsg)

            socket.emit('server_msg', serverMsg)
        })
    }  
}