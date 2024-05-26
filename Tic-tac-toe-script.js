let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b8");
let answer = document.getElementById("winner");

function abc(event){
    console.log(event.target);
    event.target.innerHTML = "Hi";
}
let toggle = false;
function change(event){
    if(toggle){
        event.target.innerHTML = "X";
        event.target.disabled = true;
    }
    else{
        event.target.innerHTML = "O";
        event.target.disabled = true;
    }
    toggle = (!toggle);
    goal_state(event);
}
function goal_state(event){
    if(event.target == b1 || event.target == b2 || event.target == b3){
        console.log("Running");
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b4 || event.target == b5 || event.target == b6){
        console.log("Running");
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b5.innerHTML;
        }
    }
    if(event.target == b7 || event.target == b8 || event.target == b9){
        console.log("Running");
        if(b7.innerHTML == b8.innerHTML && b7.innerHTML == b9.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b7.innerHTML;
        }
    }
    if(event.target == b4 || event.target == b1 || event.target == b7){
        console.log("Running");
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b2 || event.target == b5 || event.target == b8){
        console.log("Running");
        if(b2.innerHTML == b5.innerHTML && b2.innerHTML == b8.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b2.innerHTML;
        }
    }
    if(event.target == b3 || event.target == b6 || event.target == b9){
        console.log("Running");
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b3.innerHTML;
        }
    }
    if(event.target == b1 || event.target == b5 || event.target == b9){
        console.log("Running");
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b7 || event.target == b5 || event.target == b3){
        console.log("Running");
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            console.log("Correct");
            answer.value = "The winner is";
            answer.value += b3.innerHTML;
        }
    }
}