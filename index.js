


let randomDiceGenerator = (className) => {
    var randomNumber = Math.floor(Math.random() * (6) + 1);
    let src1 = "/images/dice" + randomNumber + ".png";
    document.querySelector(className).setAttribute("src", src1);
    console.log(src1)
    return randomNumber;
}

let dice = () =>{
    let randomNum1 = randomDiceGenerator(".img1");
    let ramdomNum2  =randomDiceGenerator(".img2");
    
    if (randomNum1 > ramdomNum2){
        document.querySelector("h1").textContent="Player 1 Wins";
    }
    else if (randomNum1 < ramdomNum2){
        document.querySelector("h1").textContent="Player 2 Wins";
    }
    else{
        document.querySelector("h1").textContent="Its a draw!";
    }
    
    const refreshPage = () => {
        location.reload();
      }
};



document.querySelector(".button").addEventListener("click",  dice);