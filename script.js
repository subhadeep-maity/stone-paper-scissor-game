let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#userscore");
const compscorePara=document.querySelector("#compscore");

//function for show winner && result print && score print
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        console.log("YOU WON");
        msg.innerText=`you win.!! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorePara.innerText=compScore;
        console.log("you loose.");
        msg.innerText=`you lose.!! computers ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
//draw game function
const drawGame=()=>{
    console.log("It is a Draw");
    msg.innerText="Game was draw. play again";
    msg.style.backgroundColor="#081b31";
}
//new function call for generating computer random choice
const gencompChoice=()=>{
    const options=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*options.length);
    return options[random];
}

//new function for playing game
const playgame= (userchoice)=>{
    console.log("userchoice=",userchoice);
    //generating computers random choice
    const compChoice=gencompChoice();//calling for generating random choice
    console.log("Computer choice=",compChoice);

    if(userchoice===compChoice){
        // console.log("its a tie");
        //OR draw game function call
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"? false : true;
        }
        else if(userchoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"? false : true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
        }

    
};

//Adding event listener for each choice
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
         playgame(userchoice);//passing the value of user to the computer generated vlue
    });
});