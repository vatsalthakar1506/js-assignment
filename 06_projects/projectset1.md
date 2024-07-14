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