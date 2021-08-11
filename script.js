'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number';
console.log(document.querySelector('.message').textContent);
   
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// HANDLING CLICK EVENTS

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // WHEN NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = '⛔  NO NUMBER!!';

    // WHEN PLAYER WINS
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉  CORRECT NUMBER!';

    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // GUESS IS TOO HIGH
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }

    // GUESS IS TOO LOW
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
