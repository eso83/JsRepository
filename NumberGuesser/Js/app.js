const game =document.querySelector("#game"),
massage = document.querySelector(".massage"),
      minNum = document.querySelector(".minNum"),
      maxNum = document.querySelector(".maxNum"),
      submitBtn = document.querySelector("#submitGuess"),
      guessInput = document.querySelector("#GuessInput"),
      replay =document.querySelector("#replay");


let min = 1,    
    max = 10,
    correctNum=Math.floor(Math.random()*10)+1,
    guessLeft=3;
    console.log(correctNum)

    minNum.innerText=min;
    maxNum.innerText=max;

    
    submitBtn.addEventListener("click",()=>{
        const guess = parseInt(guessInput.value);
        if(isNaN(guess)|| guess<min||guess>max){
            guessInput.style.borderColor="red"
            getMassage(`please Enter Number Between ${min} and ${max}`,"red");
        } 
        
        else{
        if(guess==correctNum){
            GameOver(true,`${correctNum} is Correct, You Win!`);
            replay.innerText="paly agin "
            replay.style.display="inline"
        }
        else{
            guessLeft-=1
            GameOver(false,`Your Guess is wrong,${guessLeft} Guess is Left`);
            guessInput.value="";
            if(guessLeft===0){
                guessInput.disabled=true;
                replay.style.display="inline"
                getMassage(`${correctNum} is Correct, you lose`);
            }
        }}
        
        
    });
    replay.addEventListener("click",()=>{
        guessInput.disabled=false;
        replay.style.display="none";
        guessInput.style.borderColor="gray";
        guessLeft=3;
        correctNum=Math.floor(Math.random()*10)+1;
        getMassage("","")
        console.log(correctNum);
    });
    console.log(guessLeft)
    
    function GameOver(won,msg){
        won===true ? color="green": color="red";
        guessInput.style.borderColor=color;
        massage.style.color=color;
        getMassage(msg);
 
    }
    function getMassage(msg,color){
        massage.style.color=color;
         massage.textContent=msg;
     }
    //  function play() {
    //     const guess = parseInt(guessInput.value);
    //     if(isNaN(guess)|| guess<min||guess>max){
    //         guessInput.style.borderColor="red"
    //         getMassage(`please Enter Number Between ${min} and ${max}`,"red");
    //     } 
        
    //     else{
    //     if(guess==correctNum){
    //         GameOver(true,`${correctNum} is Correct, You Win!`);
    //     }
    //     else{
    //         guessLeft-=1
    //         GameOver(false,`Your Guess is wrong,${guessLeft} Guess is Left`);
    //         guessInput.value="";
    //         if(guessLeft===0){
    //             guessInput.disabled=true;
    //             replay.style.display="inline"
    //             getMassage(`${correctNum} is Correct, you lose`);
    //         }
    //     }}
        
        
    // };
