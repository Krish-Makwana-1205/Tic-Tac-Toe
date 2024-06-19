let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let pvp = document.getElementById("pvp");
let ebot = document.getElementById("ebot");
let ai = document.getElementById("AI");
let prev;
let count = 0;
let bot = Math.floor(Math.random() * 10);
const bools = [];
for(let i = 0; i < 9; i++){
    bools[i] = false;
}
let toggle = false;

function select(){
    if(ai.checked){
        window.location.replace('http://127.0.0.1:5500/Tic-tac-toe-AI.html');
    }
    else if(pvp.checked){
        window.location.replace('http://127.0.0.1:5500/Tic-tac-toe-pvp.html'); 
    }
    else if(ebot.checked){
        window.location.replace('http://127.0.0.1:5500/Tic-tac-toe-bot.html')
    }
}