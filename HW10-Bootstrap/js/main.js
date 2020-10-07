setTimeout(start, 2000);

var i = 1;
var number_of_messages = document.getElementById('num-messages');

function start() {
  setInterval(increase_num_messages, 500);
}

function increase_num_messages() {
    if (i < 25) {
      i++;
      number_of_messages.innerText = i;
    }
    else {
        i = 0
    }
}

function changeFollow (idFollow) {
    let idBtn =  document.getElementById(idFollow);
        idBtn.style.background = "#FFFFFF";
        idBtn.style.color = "#111111"
        idBtn.style.border = "1px solid #dbdbdb";
        idBtn.innerHTML = "Message";
} 