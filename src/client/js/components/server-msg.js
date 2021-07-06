export function serverMsg(socket){

    socket.on('server_msg', (data) => {

        let msg = document.createElement('div');
        msg.className += 'msg-wrapper web-msg-wrapper';
        msg.id = data.mid;
        msg.innerHTML = "<div class='broadcast-msg'><p style='font-size:8px;'>"+Date(data.dt).toString()+"</p><strong> "+data.msg+"</strong><p style='font-size:8px;'>"+data.mid+"</p></div>"

        let chatWrapper = document.getElementById('console-inner-wrapper');
        chatWrapper.appendChild(msg);

        let _div = document.getElementById(data.mid);
        _div.scrollIntoViewIfNeeded()

        //setTimeout(function(){
          _div.style.opacity = 1.0;
        //}, 400)

    });

}
  