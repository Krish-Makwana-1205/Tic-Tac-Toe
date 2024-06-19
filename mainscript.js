let pvp = document.getElementById("pvp");
let ebot = document.getElementById("ebot");
let ai = document.getElementById("AI");

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