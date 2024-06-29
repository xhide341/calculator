// theme elements
const body = document.body;
const toggleThemeCheckbox = document.getElementById('toggle-theme');
const displayScreen = document.querySelector('.display-screen');
const sunIcon = document.querySelector('.label-sun');
const moonIcon = document.querySelector('.label-moon');
// operations
const button = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('.button-operator');
const numButtons = document.querySelectorAll('.button-num');
const equalButton = document.querySelector('.button-equal');
const clearButton = document.querySelector('.button-ac');
const plusMinusButton = document.querySelector('.button-plus-minus');
// Display elements
const displayEquation = document.querySelector('.display-equation');
const displayResult = document.querySelector('.display-result');


function toggleTheme(isDarkMode) {
    body.classList.toggle('dark-mode', isDarkMode);
    body.classList.toggle('light-mode', !isDarkMode);
    
    sunIcon.style.display = isDarkMode ? 'none' : 'block';
    moonIcon.style.display = isDarkMode ? 'block' : 'none';
    
    displayScreen.style.backgroundColor = isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)';
    displayScreen.style.color = isDarkMode ? 'var(--text-dark)' : 'var(--text-light)';
}
  
toggleThemeCheckbox.addEventListener('change', function() {
    const isDarkMode = this.checked;
    toggleTheme(isDarkMode);
});
  
toggleTheme(toggleThemeCheckbox.checked);


class Calculator {
    constructor(displayResultElement, displayEquationElement) {
        this.displayResultElement = displayResultElement;
        this.displayEquationElement = displayEquationElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.equation = '';
        this.updateResultDisplay();
        this.updateEquationDisplay();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        this.updateResultDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateResultDisplay();
    }

    chooseOperation(operation) {
        
        if (operation === '+-') {
            this.toggleSign();
            operation = undefined;
            return;
        }

        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.equation = `${this.currentOperand} ${this.operation}`;
        this.currentOperand = '';
        this.updateEquationDisplay();
    }

    toggleSign() {
        if (this.currentOperand === '') return;
        this.currentOperand = (parseFloat(this.currentOperand) * -1).toString();
        this.equation = `negate(${this.currentOperand})`;
        this.operation = undefined;
        this.updateEquationDisplay();
        this.updateResultDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    computation = "Error";
                } else {
                    computation = prev / current;
                }
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }
        this.equation = `${this.previousOperand} ${this.operation} ${this.currentOperand} =`;
        this.currentOperand = this.roundResult(computation);
        this.operation = undefined;
        this.previousOperand = '';
        this.updateResultDisplay();
        this.updateEquationDisplay();
    }

    updateResultDisplay() {
        this.displayResultElement.innerText = this.currentOperand;
    }

    updateEquationDisplay() {
        this.displayEquationElement.innerText = this.equation;
    }

    roundResult(number) {
        if (typeof number !== 'number') return number;
        if (number.toString().includes('.') && number.toString().split('.')[1].length > 8) {
            return Number(number.toFixed(8));
        }
        return number;
    }

    handleKeyboard(key) {
        if (/[0-9.]/.test(key)) {
            this.appendNumber(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            this.chooseOperation(key);
        } else if (key === 'Enter' || key === '=') {
            this.compute();
        } else if (key === 'Backspace') {
            this.delete();
        } else if (key === 'Escape') {
            this.clear();
        }
    }
}

const calculator = new Calculator(displayResult, displayEquation);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '×') {
            calculator.chooseOperation('*');
        }
        if (button.innerText === '÷') {
            calculator.chooseOperation('/');
        }
        if (button.innerText !== 'ac' && button.innerText !== '=' && button.innerText !== '&#x207a;&#x2044;&#x208b;') {
            calculator.chooseOperation(button.innerText);
        }
    });
});

clearButton.addEventListener('click', () => {
    calculator.clear();
});

equalButton.addEventListener('click', () => {
    calculator.compute();
});

plusMinusButton.addEventListener('click', () => {
    calculator.toggleSign();
});

document.addEventListener('keydown', function(event) {
    calculator.handleKeyboard(event.key);
});

