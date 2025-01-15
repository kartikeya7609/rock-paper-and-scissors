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
            msg.style.color ="lightcoral";

        }
        else if(userChoice === "rock"){
            if(compChoice === "paper"){
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";
                msg.style.color ="red";

                compScore++;
            }
            else if(compChoice==="scissors"){
                console.log("you won and computer lost");
                msg.innerText ="you win";
                msg.style.color ="green";

                userScore++;

            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "rock"){
            console.log("you won and computer lost");  
            msg.innerText ="you win";
            msg.style.color ="green";

            userScore++;

            }
            else if (compChoice === "scissors"){
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";
                msg.style.color ="red";
                compScore++;
            }
        }
        else if (userChoice === "scissors") {
            if(compChoice === "paper"){
                console.log("you won and computer lost");   
                msg.innerText ="you win";
                msg.style.color ="green";

                userScore++;
           }
            else {
                console.log("you lost and computer wins");
                msg.innerText ="You Lost";
                msg.style.color ="red";
                compScore++;
            }
        } 
        console.log(userScore);
userscore = document.querySelector("#user-score");
userscore.innerText =userScore
compscore = document.querySelector("#comp-score");
compscore.innerText =compScore
    }

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
     userChoice = choice.getAttribute("id");
    playGame (userChoice);

});

}); 



