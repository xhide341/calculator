const body = document.body;
const toggleThemeCheckbox = document.getElementById('toggle-theme');
const displayScreen = document.querySelector('.display-screen');
const sunIcon = document.querySelector('.label-sun');
const moonIcon = document.querySelector('.label-moon');
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
    // Light mode styles for numButtons
    numButtons.forEach(button => {
      button.style.backgroundColor = '#eee';
      button.style.color = '#000'; 
    });
    operatorButtons.forEach(button => {
        button.style.backgroundColor = '#eee'; // Adjust background color as needed
      });
  }
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
});