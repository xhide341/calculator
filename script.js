const body = document.body;
const toggleThemeCheckbox = document.getElementById('toggle-theme');
const displayScreen = document.querySelector('.display-screen');
const sunIcon = document.querySelector('.label-sun');
const moonIcon = document.querySelector('.label-moon');
const button = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.button-operator');
const numButtons = document.querySelectorAll('.button-num');

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
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#1d2838'); // Darker hover color
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#283345'); // Reset to original color
      } else {
        button.addEventListener('mouseover', () => button.style.backgroundColor = '#ddd'); // Lighter hover color
        button.addEventListener('mouseout', () => button.style.backgroundColor = '#eee'); // Reset to original color
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


  // Toggle button colors using the function
  toggleButtonColors(isDarkMode);
  addHoverEffects(isDarkMode);
});

