let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let game = document.getElementById('gameContainer');
let jumping = 0;
let counter = 0;
let inputCounter = 0;
let resets = 0;


function hideAllInputsExcept(index) { 
    const inputs = document.querySelectorAll("input");
    const labels = document.querySelectorAll("label");
    inputs.forEach((input, i) => {
        if (i === index) {
            input.style.display = "Block";
            input.focus();
        }else{
            input.style.display = "none";
        }
    });
    labels.forEach((input, i) => {
        if (i === index) {
            input.style.display = "block";
        }
            else {
            input.style.display = "none";
        }
    }
    );
}




function resetInputs() {
    setTimeout(function () {
        resets++;
    }, 2000);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = "";
    });
    inputCounter = 0;
}

function inputValueValid(inputValue){
    if (inputValue == "Carrot" || inputValue == "carrot" || inputValue == "CARROT"){
        return true;    
    }

    if(inputValue == "flappyform" || inputValue == "Flappyform" || inputValue == "FLAPPYFORM" || inputValue == "FlappyForm" || inputValue == "flappyForm" || inputValue == "FLAPPYform"){
        return true;
    }

    if (inputValue == "watermelon" || inputValue == "Watermelon" || inputValue == "WATERMELON"){
        return true;
    }
    
    return false;
}

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});


document.addEventListener("keydown", event => {
        jump();
});     


window.onload = function() {
    alert('Welcome to FlappyForm\nRules:\nPress any key to jump and avoid the obstacles while answering all the questions below.\nGood luck!');
    game.style="visibility:visible;"
    hideAllInputsExcept(0);
    document.getElementById("input0").focus();
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            let input = document.getElementById("input" + inputCounter);
            let inputValue = input.value;
            if (inputValueValid(inputValue) == false)
                return
            input.style.display = "none";
            inputCounter++;
            if (inputCounter < 3) {
                
                hideAllInputsExcept(inputCounter)
                
            } else {
                document.getElementById("form").submit();
            }
        }
    });
};
            





setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 2)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500 - characterTop);
    if((characterTop > 480)||((blockLeft < 20)&&(blockLeft >- 50)&&((cTop < holeTop)||(cTop>holeTop + 130)))){
        character.style.top = 100 + "px";
        counter=0;
        resetInputs();
        hideAllInputsExcept(0);
    }
},10);

function jump(){
    numOfResets = document.getElementById("num");
    numOfResets.value = resets;
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 6)&&(jumpCount < 15)){
            character.style.top = (characterTop - 5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
}