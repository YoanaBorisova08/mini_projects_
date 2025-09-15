'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const pl1nameEl = document.getElementById('player-0-name');
const pl2nameEl = document.getElementById('player-1-name');
const check1 = document.querySelector('.btn--check--0');
const check2 = document.querySelector('.btn--check--1');
const guess1El = document.querySelector('.guess--0');
const guess2El = document.querySelector('.guess--1');
const wrongLetters = document.getElementById('wrong-letters');
const hiddenLetter = document.querySelector('.hidden-gen-letter');
const btnNew = document.querySelector('.btn--agn');

let activePlayer = 0;
let tries = 0;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
hiddenLetter.textContent = '?';
//Receive names
pl1nameEl.textContent = prompt('Player 1, what is your name?', '');
pl2nameEl.textContent = prompt('Player 2, what is your name?', '');

//Click button Check
check1.addEventListener('click', function () {
  if (activePlayer === 0) {
    console.log(guess1El.value);
    tries++;
    //Rigth guess
    if (guess1El.value === randomLetter) {
      wrongLetters.textContent = `${pl1nameEl.textContent} won the game. Total of tries: ${tries}.`;
      player1.classList.add('winner');
      hiddenLetter.textContent = randomLetter;
      hiddenLetter.classList.add('winnerLetter');
      activePlayer = 7;
      //Wrong guess
    } else {
      wrongLetters.textContent += ` ${guess1El.value}`;
      activePlayer = 1;
    }
  }
});

check2.addEventListener('click', function () {
  if (activePlayer === 1) {
    console.log(guess2El.value);
    tries++;
    //Right guess
    if (guess2El.value === randomLetter) {
      wrongLetters.textContent = `${pl2nameEl.textContent} won the game. Total of tries: ${tries}.`;
      player2.classList.add('winner');
      hiddenLetter.textContent = randomLetter;
      hiddenLetter.classList.add('winnerLetter');
      activePlayer = 7;
      //Wrong guess
    } else {
      wrongLetters.textContent += ` ${guess2El.value}`;
      activePlayer = 0;
    }
  }
});

//New game

btnNew.addEventListener('click', function () {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  hiddenLetter.textContent = '?';
  player1.classList.remove('winner');
  player2.classList.remove('winner');
  hiddenLetter.classList.remove('winnerLetter');
  wrongLetters.textContent = 'Wrong letter:';
  activePlayer = 0;
  guess1El.value = '';
  guess2El.value = '';
  tries = 0;
});
