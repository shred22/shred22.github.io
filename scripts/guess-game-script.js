'use strict';

let secretNumber = generateRandomNum();
console.log("Sec Num is : "+secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log("Guessed Number is : "+guess, typeof guess);

    if(guess < secretNumber) {
        document.querySelector('.message').textContent = " :-( Too Low .!!"
        document.querySelector('.score').textContent = --score;
    }

    else if(guess > secretNumber) {
        document.querySelector('.message').textContent = " :-( Too High .!!"
        document.querySelector('.score').textContent = --score;
    }
     else if(guess === secretNumber) {
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }  else {
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.message').textContent = "Woooahhh ..You Guessed it Right  .!!"
        
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
     }

});

document.querySelector(".again").addEventListener("click", () => {

    secretNumber = generateRandomNum();
    console.log("Sec Num 2 is : "+secretNumber);
    document.querySelector('.message').textContent =  "Start guessing..."
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
});

function generateRandomNum() {
    return Math.trunc(Math.random() * 20) + 1;
}