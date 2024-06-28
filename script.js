// styling
const body = document.body;
const toggleThemeCheckbox = document.getElementById('toggle-theme');
const displayScreen = document.querySelector('.display-screen');
const sunIcon = document.querySelector('.label-sun');
const moonIcon = document.querySelector('.label-moon');
const button = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.button-operator');
const numButtons = document.querySelectorAll('.button-num');
// Number buttons
const button0 = document.querySelector('.button-0');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const button6 = document.querySelector('.button-6');
const button7 = document.querySelector('.button-7');
const button8 = document.querySelector('.button-8');
const button9 = document.querySelector('.button-9');
const buttonPeriod = document.querySelector('.button-period');
const buttonAc = document.querySelector('.button-ac');
// Operator buttons
const buttonAC = document.querySelector('.button-ac');
const buttonPlusMinus = document.querySelector('.button-plus-minus');
const buttonPercentage = document.querySelector('.button-percentage');
const buttonDivide = document.querySelector('.button-divide');
const buttonMultiply = document.querySelector('.button-multiply');
const buttonSubtract = document.querySelector('.button-subtract');
const buttonAdd = document.querySelector('.button-add');
const buttonEqual = document.querySelector('.button-equal');
// Display elements
const displayEquation = document.querySelector('.display-equation');
const displayResult = document.querySelector('.display-result');


function toggleButtonColors(isDarkMode) {
  if (isDarkMode) {
    numButtons.forEach(button => {
        button.style.backgroundColor = '#283345';
        button.style.color = '#fff';
    });
    operatorButtons.forEach(button => {
        button.style.backgroundColor = '#283345'; // Adjust background color as needed
    });
  } else {
    numButtons.forEach(button => {
        button.style.backgroundColor = '#eee';
        button.style.color = '#000'; 
    });
    operatorButtons.forEach(button => {
        button.style.backgroundColor = '#eee'; // Adjust background color as needed
    });
  }
}

function addHoverEffects(isDarkMode) {
    button.forEach(button => {
      if (isDarkMode) {
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#1d2838');
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#283345');
      } else {
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#ddd');
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#eee');
      }
    });
}

toggleThemeCheckbox.addEventListener('change', function() {
  const isDarkMode = this.checked;

  sunIcon.style.display = isDarkMode ? 'none' : 'block';
  moonIcon.style.display = isDarkMode ? 'block' : 'none';
  body.style.backgroundColor = isDarkMode ? '#283345' : '#eee';
  displayScreen.style.backgroundColor = isDarkMode ? '#283345' : '#eee';
  displayScreen.style.color = isDarkMode ? '#eee' : '#000';

  toggleButtonColors(isDarkMode);
  addHoverEffects(isDarkMode);
});

// WHEN a number is pressed,
// ADD the number to display
// WHEN an operator is pressed,
// ADD the operator to display
// WHEN the equals button is pressed,
// EVALUATE entire expression and
// DISPLAY the result;



function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
