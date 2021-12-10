var btn = document.getElementById('btn-id');
var mainDiv = document.querySelector('body');

function onBtnclick (){
    
    mainDiv.style.backgroundColor ="rgb(" + Math.floor(Math.random()*255)+ "," + Math.floor(Math.random()*255) +"," + Math.floor(Math.random()*255) + ")"
}

// btn.onclick = onbtnclick;

btn.addEventListener('click',onBtnclick);