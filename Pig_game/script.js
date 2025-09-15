'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');

let scores, currScore, activePlayer, isPlaying;
function init() {
  scores = [0, 0];
  currScore = 0;
  activePlayer = 0;
  isPlaying = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curr0El.textContent = 0;
  curr1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
}

init();

function switchActivePlayer() {
  currScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    //Generate number
    let dice = Math.trunc(Math.random() * 6) + 1;
    //Show dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //Check if 1 -> switch
    if (dice !== 1) {
      //Add dice to current score
      currScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      //Switch to next player
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    //Add curr score to active player's score
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //If >=100 -> winner
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isPlaying = false;
      diceEl.classList.add('hidden');
    } else {
      //Switch active player
      switchActivePlayer();
    }
  }
});

btnNew.addEventListener('click', init);
