const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('titleColorInput');
const myTextInput2 = document.getElementById('titleSizeInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

myButton.addEventListener('click', () => {
  myHeading.style.fontSize = myTextInput2.value;
});


const h2Tag = document.querySelectorAll('h2');
// const myButton = document.getElementById('myButton');
const myColorInput = document.getElementById('colorInput');
const mySizeInput = document.getElementById('sizeInput');
const myFontInput = document.getElementById('fontInput');


myButton.addEventListener('click', () => {
  //myHeading.style.color = myTextInput.value;
  for (var i=0; i<h2Tag.length; i++) {
    h2Tag[i].style.color = myColorInput.value;
    h2Tag[i].style.fontSize = mySizeInput.value;
    h2Tag[i].style.fontFamily = myFontInput.value;
  }
});
