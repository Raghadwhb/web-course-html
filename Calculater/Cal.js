const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let previousInput = '';
let operation = null;


function updateScreen() {
    screen.value = currentInput;
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateScreen();
}


function inputNumber(num) {
    if (currentInput === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateScreen();
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}


function handleOperator(op) {
    if (operation !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = '0';
    operation = op;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero!');
                clear();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateScreen();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (button.classList.contains('all-clear')) {
            clear();
        } else if (button.classList.contains('equal')) {
            if (operation !== null) {
                calculate();
            }
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('decimal')) {
            inputDecimal();
        } else {
            inputNumber(value);
        }
    });
});

updateScreen();
