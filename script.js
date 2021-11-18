'use strict';

// document.querySelector('.again').style.display = 'block';
// document.querySelector('.message').innerHTML = 'You have guessed right!'
// document.body.style.backgroundColor = 'teal'
// document.querySelector('.number').innerHTML = Math.trunc(Math.random() *30);

// let button = document.querySelector('.again')
// button.addEventListener('click',function() {

//     document.querySelector('.again').style.backgroundColor = 'yellow';
// document.querySelector('.message').innerHTML = 'You are a Champion ✨✨✨'
//     document.querySelector('.again').innerHTML = 'I am playing'
//     document.body.style.backgroundColor = 'red'

// })

// // const displayMessage = function (message){
// //     document.querySelector('.message').textContent = message;
// };

 document.querySelector('.again').style.display = 'none';
 document.querySelector('.number').innerHTML = Math.trunc(Math.random() *30);

// document.querySelector('.check').addEventListener('.click', function (){
//     const guess = Number(document.querySelector('.guess').value);

//     if (guess === secretNumber) {
//         document.querySelector('.message').textContent ='Correct! You have guessed it';
//         document.querySelector('.body').style.backgroundColor = '#60b347';
//         document.querySelector('.again').style.display = 'block';
//         document.querySelector('.number').textContent = secretNumber
//     } else {
//         document.querySelector('.message').textContent = 'Oops! Try Again';
//     }
// })

const ss = document.querySelector('.score').innerHTML;
console.log(ss);

// const number = document.querySelector('.number');
// number.textContent = '?';
// const check = document.querySelector('.check');
// const secretNumber = Math.trunc(Math.random() * 5 + 1);

// check.addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (guess === secretNumber) {
//     document.body.style.backgroundColor = 'green';
//     playAgain.style.display = 'block';
//     playAgain.textContent = 'Play Again';
//     document.querySelector('.message').textContent =
//       'C0NG@TUL@TI0NS🥳🤩🤩 You Won🤩';
//     document.querySelector('.number').innerHTML = secretNumber;
//     document.querySelector('.check').innerHTML = 'Check';
//   } else {
//     document.querySelector('.message').textContent = 'Play Again😡';
//   }
// });

// checkButton.addEventListener('click',e => {
//     const labelScoreValue = Number(labalScore.innerText);
//     const labelScoreValue = Number(labelHighScore.innerText);
//     const guessNumberValue = Number(guessNumber.value);

//     if (guessNumberValue === secretNumber) {
//         playButton.style.display = 'block';
//         startGuess.innerText = 'You won!';
//         secretNumberText.innerText = secretnumber;
//         labelScoreValue.innerText = labelHighScoreValue * 10;

//         document.body.style.backgroundColor = 'green';

//     }else{
//         startGuess.innerHTML = 'Play Again!';
//         document.body.style.backgroundColor = 'red';
//         labelHighScore.innerText = labelScoreValue - 1;

//     }
// })
