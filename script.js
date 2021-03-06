import 'regenerator-runtime/runtime';
import 'core-js/stable';

//Selectors
let highscore = document.querySelector('.highscore');
let butoncheck = document.querySelector('.check');
let butonagain = document.querySelector('.again');
let clue = document.querySelector('.message');
let scoreCurent = document.querySelector('.score');
let number = document.querySelector('.number');
let body = document.querySelector('body');

//Variables
let x;
let score = 20;
highscore.textContent = 0;

function startGame() {
   x = Math.floor(Math.random() * 20);
   butoncheck.addEventListener('click', () => {
      let valoare = document.querySelector('.guess').value;

      if (x == valoare && score > 0) {
         clue.textContent = 'Corect number!';
         scoreCurent.textContent = `${score}`;
         number.textContent = `${valoare}`;
         body.classList.add('culoarevictorie');
         if (score > highscore.textContent) {
            highscore.textContent = score;
         }
      } else if (x > valoare && score > 0) {
         clue.textContent = 'too low';
         score--;
         scoreCurent.textContent = `${score}`;
      } else if (x < valoare && score > 0) {
         clue.textContent = 'too high';
         score--;
         scoreCurent.textContent = `${score}`;
      } else {
         alert('Game over');
         return;
      }
   });
}
function playAgain() {
   let valoare = (document.querySelector('.guess').value = '');
   body.classList.remove('culoarevictorie');
   number.textContent = '?';
   scoreCurent.textContent = 20;
   score = 20;
   x = Math.floor(Math.random() * 20);
}

butonagain.addEventListener('click', playAgain);
startGame();
