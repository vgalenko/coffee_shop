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

const ulTag = document.getElementsByTagName('ul')[0];
const ulColorInput = document.getElementById('ulColorInput');
const ulSizeInput = document.getElementById('ulSizeInput');
const ulFontInput = document.getElementById('ulFontInput');

myButton.addEventListener('click', () => {
  ulTag.style.color = ulColorInput.value;
});

myButton.addEventListener('click', () => {
  ulTag.style.fontSize = ulSizeInput.value;
});

myButton.addEventListener('click', () => {
  ulTag.style.fontFamily = ulFontInput.value;
});


const h2Tag = document.querySelectorAll('h2');
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

const pTag = document.querySelectorAll('p');
const pColorInput = document.getElementById('pColorInput');
const pSizeInput = document.getElementById('pSizeInput');
const pFontInput = document.getElementById('pFontInput');


myButton.addEventListener('click', () => {
  //myHeading.style.color = myTextInput.value;
  for (var i=0; i<pTag.length; i++) {
    pTag[i].style.color = pColorInput.value;
    pTag[i].style.fontSize = pSizeInput.value;
    pTag[i].style.fontFamily = pFontInput.value;
  }
});
