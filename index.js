let username = prompt("Type in your desired username: ");
console.log(`******* Welcome to my guessing game ${username} *******`);

let score = 2;
let range = 2;
let rounds = Number(prompt(`How many round games do you want to play?`));

if (rounds){
let random = (range) => {
   randomNum = Math.floor(Math.random() * range +1);
 return randomNum;
}
  
alert(`Your initial score is: ${score}`);

let i = 1;
while (rounds >= i){
  random(range);
  
  console.log(`--------ROUND${i}---------`);

  let guessNum =  Number(prompt(`Guess a number between 1 and ${range}: `));
    if (!guessNum){
      alert("Pls enter a valid number")
    }
    else if(random(range) === (guessNum)){
      score++;
      range++;
      console.log("Tada! You guessed correctly!")
    }
    else {
      score --;
      console.log("Oops! Wrong guess, try again!")
    };
    if(i !== rounds){
      alert(`Your score is: ${score}`)
    } else {
      alert(`Thanks for playing, your final score is: ${score}`);
    }
    i++; 
  } 
}
else {
    alert("Wrong choice! Pls enter a valid number next time");
};