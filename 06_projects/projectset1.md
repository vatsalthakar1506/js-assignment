# Project related to Dom

##  project link
[Click Here]("https://stackblitz.com/edit/dom-project-chaiaurcode-fx5vcl?file=index.html")



# Solution Code
## project 1

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

