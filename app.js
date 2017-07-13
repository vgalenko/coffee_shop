const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

const myHeading2 = document.getElementsByTagName('ul')[0];
const myButton2 = document.getElementById('myButton');
const myTextInput2 = document.getElementById('myTextInput2');

myButton2.addEventListener('click', () => {
  myHeading2.style.fontSize = myTextInput2.value;
});
