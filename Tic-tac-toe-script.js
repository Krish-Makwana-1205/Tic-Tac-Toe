let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let answer = document.getElementById("winner");
const bools = [];
for(let i = 0; i < 9; i++){
    bools[i] = false;
}
let toggle = false;
function change(event){
    if(bools[nums(event)-1] == true){
        return ;
    }
    if(toggle){
        event.target.innerHTML = "X";
        //event.target.disabled = true;
    }
    else{
        event.target.innerHTML = "O";
        //event.target.disabled = true;
    }
    console.log("Running");
    toggle = (!toggle);
    bools[nums(event)-1] = true;
    goal_state(event);
}
function goal_state(event){
    if(event.target == b1 || event.target == b2 || event.target == b3){
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            answer.value = "The winner is ";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b4 || event.target == b5 || event.target == b6){
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            answer.value = "The winner is ";
            answer.value += b5.innerHTML;
        }
    }
    if(event.target == b7 || event.target == b8 || event.target == b9){
        if((b7.innerHTML == b8.innerHTML) && (b7.innerHTML == b9.innerHTML)){
            answer.value = "The winner is ";
            answer.value += b7.innerHTML;
        }
    }
    if(event.target == b4 || event.target == b1 || event.target == b7){
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            answer.value = "The winner is ";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b2 || event.target == b5 || event.target == b8){
        if((b2.innerHTML == b5.innerHTML) && (b2.innerHTML == b8.innerHTML)){
            answer.value = "The winner is ";
            answer.value += b2.innerHTML;
        }
    }
    if(event.target == b3 || event.target == b6 || event.target == b9){
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            answer.value = "The winner is ";
            answer.value += b3.innerHTML;
        }
    }
    if(event.target == b1 || event.target == b5 || event.target == b9){
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            answer.value = "The winner is ";
            answer.value += b1.innerHTML;
        }
    }
    if(event.target == b7 || event.target == b5 || event.target == b3){
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            answer.value = "The winner is ";
            answer.value += b3.innerHTML;
        }
    }
}
function disable_all(){
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}
function nums(event){
    if(event.target == b1){
        return 1;
    }
    else if(event.target == b2){
        return 2;
    }
    else if(event.target == b3){
        return 3;
    }
    else if(event.target == b4){
        return 4;
    }
    else if(event.target == b5){
        return 5;
    }
    else if(event.target == b6){
        return 6;
    }
    else if(event.target == b7){
        return 7;
    }
    else if(event.target == b8){
        return 8;
    }
    else if(event.target == b9){
        return 9;
    }

}