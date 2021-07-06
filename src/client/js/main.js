import { io } from "socket.io-client";
import { sendIcon } from "send-icon";
import { clientMsg } from "client-msg";
import { serverMsg } from "server-msg";
const socket = io();

function init(){

  console.log('initialized...')
  sendIcon(socket);
  clientMsg(socket);
  serverMsg(socket);

}

window.addEventListener ?
window.addEventListener("load", init, false) :
window.attachEvent && window.attachEvent("onload", init);
