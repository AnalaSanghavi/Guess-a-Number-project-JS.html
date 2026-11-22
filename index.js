let random = (Math.ceil(Math.random()*100));
let number = document.getElementById("input");
let output = document.getElementById("txt");
let chance = document.getElementById("chance")
let chances = 0;
console.log(random)

function onGuessBtn(){
    if(number.value==random){
        output.textContent = "Correct! Congratulations..😍";
        output.style.color = "green";
        chances++
        chance.textContent = "Number of Chances: "+chances;
        chance.style.color = "blueviolet"
        chance.style.fontSize = "25px";
    }else if(number.value<random){
        output.textContent = "Oops! Your Guess is Too Less😢";
        output.style.color = "red";
        chances++
    }else{
        output.textContent = "Oops! Your Guess is Too High😯";
        output.style.color = "red";
        chances++
    }
}
