export function clientMsg(socket){

  socket.on('client_msg', (data) => {

    let msg = document.createElement('div');
    msg.className += 'msg-wrapper ';
    msg.className += 'user-msg-wrapper';
    msg.id = data.mid;
    msg.innerHTML = "<div class='user-author'>You typed:</div><div class='user-msg'>"+data.msg+"</div>"

    let chatWrapper = document.getElementById('console-inner-wrapper');
    chatWrapper.appendChild(msg);

    let _div = document.getElementById(data.mid);
    _div.scrollIntoViewIfNeeded()

    setTimeout(function(){
      _div.style.opacity = 1.0;
    }, 400)

  });
}

  