# Project related to Dom

##  project link
[Click Here]("https://stackblitz.com/edit/dom-project-chaiaurcode-fx5vcl?file=index.html")



# Solution Code
## project 1 solution code

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {

  button.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
 ````



## project 2 Solution

```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please a give Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please a give Valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `BMI - <span>${bmi}</span> - Under Weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `BMI - <span>${bmi}</span> - Normal Range `;
    } else {
      results.innerHTML = `BMI - <span>${bmi}</span> - Overweight  `;
    }
  }
});
```

## project 3 solution code

```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  // console.log(date.toLocaleTimeString());
}, 1000);

```



## project 4 solution code
```javascript 

  console.log();

  let randomNumber = Math.floor(Math.random() * 100 + 1);

  const submit = document.getElementById('subt');
  const userInput = document.querySelector('#guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowerHigh = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = [];
  let numGuess = 1;
  let playGame = true;

  if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }
  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('please enter a valid Number');
    } else if (guess < 1) {
      alert('please enter greater zero');
    } else if (guess > 100) {
      alert('please enter below 100');
    } else {
      prevGuess.push(guess);

      if (numGuess == 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random Number was Over ${randomNumber}`);
        endGame(guess);
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`you guested write`);
      endGame();
    } else if (guess < randomNumber) {
      displayMessage(`number is too low`);
    } else if (guess > randomNumber) {
      displayMessage(`number is too high`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  }

  function displayMessage(message) {
    lowerHigh.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.style.cursor = 'pointer';
    p.innerHTML = `<h2 id="newGame">Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
      randomNumber = Math.floor(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      lowerHigh.innerHTML = '';
      playGame = true;
    });
  }

```

## PROJECT 5 SOLUTION CODE
```JAVASCRIPT 
console.log('Project 5');
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color"> 
  <table>
  <tr>
    <th>Key </th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>


</table>
  </div>`;
});




```


## project 6 solution code

```javascript 
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
console.log(body);

let interval;

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 10)];
  }
  return color;
};
function changeBgColor() {
  body.style.backgroundColor = randomColor();
}
const startChangingColor = function () {
  interval = setInterval(changeBgColor, 1000);
};
const stopChangingColor = function () {
  clearInterval(interval);
};
start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);

```




