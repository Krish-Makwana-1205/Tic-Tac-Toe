let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let prev;
let count = 0;
let bot = Math.floor(Math.random() * 10);
const bools = []
for(let i = 0; i < 9; i++){
    bools[i] = false;
}
let toggle = false;
function change(event){
    if(bools[nums(event)-1] == true){
        return ;
    }
    ++count;
    if(prev != null){
        prev.style.backgroundColor = 'rgba(32, 32, 219, 0.324)';
    }
    event.target.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    prev = event.target;
    event.target.innerHTML = 'X';
    bools[nums(event)-1] = true;
    if(goal_state(event)){
        return ;
    }
    bot_plays();
}
function goal_state(event){
    if(event.target == b1 || event.target == b2 || event.target == b3){
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b4 || event.target == b5 || event.target == b6){
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b7 || event.target == b8 || event.target == b9){
        if((b7.innerHTML == b8.innerHTML) && (b7.innerHTML == b9.innerHTML)){
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b4 || event.target == b1 || event.target == b7){
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b2 || event.target == b5 || event.target == b8){
        if((b2.innerHTML == b5.innerHTML) && (b2.innerHTML == b8.innerHTML)){
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b3 || event.target == b6 || event.target == b9){
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b1 || event.target == b5 || event.target == b9){
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(event.target == b7 || event.target == b5 || event.target == b3){
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return true;
        }
    }
    if(count == 9){
        b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        return true;
    }
    return false;
}
function disable_all(){
    for(let i = 0; i < 9; i++){
        bools[i] = true;
    }
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
let temp;
function bot_plays(){
    while(bot == 0){
        bot = Math.floor(Math.random() * 10);
    }
    while(bools[bot-1]){
        bot = Math.floor(Math.random() * 10);
        while(bot == 0){
            bot = Math.floor(Math.random() * 10);
        }
    }
    console.log(bot);
    ++count;
    if(bot == 1){
        temp = b1;
    }
    else if(bot == 2){
        temp = b2;
    }
    else if(bot == 3){
        temp = b3;
    }
    else if(bot == 4){
        temp = b4;
    }
    else if(bot == 5){
        temp = b5;
    }
    else if(bot == 6){
        temp = b6;
    }
    else if(bot == 7){
        temp = b7;
    }
    else if(bot == 8){
        temp = b8;
    }
    else if(bot == 9){
        temp = b9;
    }
    if(prev != null){
        prev.style.backgroundColor = 'rgba(32, 32, 219, 0.324)';
    }
    temp.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    prev = temp;
    temp.innerHTML = 'O';
    bools[bot-1] = true;
    if(bot == 1){
        b1 = temp;
    }
    else if(bot == 2){
        b2 = temp;
    }
    else if(bot == 3){
        b3 = temp;
    }
    else if(bot == 4){
        b4 = temp;
    }
    else if(bot == 5){
        b5 = temp;
    }
    else if(bot == 6){
        b6 = temp;
    }
    else if(bot == 7){
        b7 = temp;
    }
    else if(bot == 8){
        b8 = temp;
    }
    else if(bot == 9){
        b9 = temp;
    }
    goal_state_bot(temp);
}
function goal_state_bot(temp){
    if(temp == b1 || temp == b2 || temp == b3){
        if(b2.innerHTML == b1.innerHTML && b3.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b4 || temp == b5 || temp == b6){
        if(b5.innerHTML == b4.innerHTML && b6.innerHTML == b5.innerHTML){
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b7 || temp == b8 || temp == b9){
        if((b7.innerHTML == b8.innerHTML) && (b7.innerHTML == b9.innerHTML)){
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b4 || temp == b1 || temp == b7){
        if(b1.innerHTML == b4.innerHTML && b7.innerHTML == b1.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b2 || temp == b5 || temp == b8){
        if((b2.innerHTML == b5.innerHTML) && (b2.innerHTML == b8.innerHTML)){
            b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b3 || temp == b6 || temp == b9){
        if(b3.innerHTML == b6.innerHTML && b3.innerHTML == b9.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b1 || temp == b5 || temp == b9){
        if(b1.innerHTML == b5.innerHTML && b1.innerHTML == b9.innerHTML){
            b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(temp == b7 || temp == b5 || temp == b3){
        if(b7.innerHTML == b5.innerHTML && b7.innerHTML == b3.innerHTML){
            b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
            disable_all();
            return ;
        }
    }
    if(count == 9){
        b1.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b2.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b3.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b4.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b5.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b6.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b7.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b8.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
        b9.style.backgroundColor = 'rgba(59, 227, 30, 0.731)';
    }
}
