export function sendIcon(socket){

    // send button starts as 'false'
    let sendOver = false;

    function sendMsgKeyboard(event){
        if (event.which == 13 || event.keyCode == 13) {
            var val = document.getElementById('user-input');
            if(val.value.length > 0){
                socket.emit('client_msg', {'msg': val.value})
                val.value = '';
                return false;
            }
        }
        return true;
    }

    function sendMsgClick(event){
        var val = document.getElementById('user-input');
        if(val.value.length > 0){
            socket.emit('client_msg', {'msg': val.value})
            val.value = '';
            document.getElementById('console-inner-wrapper').scrollTop = 30;
        }
    }

    function changeSendIconEnter(){
        if(sendOver === false){
            let snd = document.getElementById('send');
            snd.innerHTML="<svg id='send-icon' width='40' height='50' viewBox='0 0 50 45'><path style='fill:#fff;' d='m 40.22,0 2.288,31.8087 -15.83,0 z'/><path style='fill:#fff;' d='M 40.22,0 15.02,31.81 0,31.81 Z'/><path style='fill:#ededed;' d='m 26.67,31.80 c -0.03,0.07 -1.86,11.136 -1.86,11.136 l -9.78,-11.136 25.19,-31.8087 z'/><path style='fill:#d0d0d0;' d='m 26.67,31.80 4.82,0 -6.686,11.136 z'></svg>"
            snd.style.transform = 'rotate(360deg)';
            sendOver = true;
        }
    }

    function changeSendIconLeave(){
        if(sendOver === true){
            let snd = document.getElementById('send');
            snd.innerHTML="<svg id='send-icon' width='47' height='50' viewBox='0 0 55 45'><path style='fill:#e6e6e6;' d='m 2.6359417,33.8923 12.1141553,-13.1759 12.295,0 12.162276,13.1759 z'/><path style='fill:#ececec;' d='m 39.207373,33.8923 -12.162276,-13.1759 12.162276,-11.3487 z'/><path style='fill:#ececec;' d='m 14.750097,20.7164 -12.1141553,13.1759 0,-24.5246 z'/><path style='fill:#fff;' d='m 2.6359417,9.3678 36.5714313,0 -18.285716,17.9737 z'/></svg>";
            snd.style.transform = 'rotate(0deg)';
            sendOver = false;
        }
    }


    let sendBtn = document.getElementById('send');
    if(sendBtn){
        sendBtn.addEventListener('click', sendMsgClick);
        document.addEventListener('keypress', sendMsgKeyboard);
        document.getElementById('send').addEventListener('mouseover', changeSendIconEnter);
        document.getElementById('send').addEventListener('mouseleave', changeSendIconLeave);
    }

}
