const soil = document.querySelectorAll('.soil');
const mole = document.querySelectorAll('.mole');
const result = document.querySelector('.result');
const pop = document.querySelector('#pop');

let soilBefore;
let finish;
let score;

function randomSoil(soil) {
  const land = Math.floor(Math.random() * soil.length);
  const soilRandom = soil[land];
  if (soilRandom == soilBefore) {
    randomSoil(soil);
  }
  soilBefore = soilRandom
  return soilRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function moleAppear() {
  const soilRandom = randomSoil(soil);
  const timeRandom = randomTime(500, 800);
  soilRandom.classList.add('appear');

  setTimeout(() => {
    soilRandom.classList.remove('appear');
    if(!finish) {
      moleAppear();
    }
  }, timeRandom);
}

function start() {
  finish = false;
  score = 0;
  result.textContent = 0;
  moleAppear();
  setTimeout(() => {
    finish = true;
  }, 10000)
}

function whack() {
  score++;
  this.parentNode.classList.remove('appear');
  pop.play();
  result.textContent = score;
}

mole.forEach(m => {
  m.addEventListener('click', whack);
});