let userScore = 0;
let compScore = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const genCompChoice=()=>{
        const options=["rock","paper","scissors"];
        const randIdx = Math.floor(Math.random()*3);
        return options[randIdx];
    }
    const playGame=(userChoice)=>{
        console.log("user choice =",userChoice);
        const compChoice = genCompChoice();
        console.log("comp choice =",compChoice);
        if(userChoice === compChoice){
            console.log("this is a draw");
            msg.innerText = "The game is draw";
        }
        else if(userChoice === "rock"){
            if(compChoice === "paper"){
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";
            }
            else if(compChoice==="scissors"){
                console.log("you won and computer lost");
                msg.innerText ="you win";
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "rock"){
            console.log("you won and computer lost");  
            msg.innerText ="you win";
            }
            else if (compChoice === "scissors"){
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";
            }
        }
        else if (userChoice === "scissors") {
            if(compChoice === "paper"){
                console.log("you won and computer lost");   
                msg.innerText ="you win";
            }
            else {
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";

            }
        }
    }
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
     userChoice = choice.getAttribute("id");
    playGame (userChoice);

});

}); 


