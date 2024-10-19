let currentInput = '';
let previousInput = '';
let operation = '';

function addToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function operator(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if(curr === 0){
                result = 'error'
            }
            else
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result;
    operation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    let displayValue = '';

    if (previousInput !== '') {
        displayValue += previousInput;
    }

    if (operation !== '') {
        displayValue += ' ' + operation + ' ';
    }

    if (currentInput !== '') {
        displayValue += currentInput;
    }

    document.getElementById('display').value = displayValue;
}