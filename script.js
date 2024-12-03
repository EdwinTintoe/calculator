const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
display.textContent = "0";


let currentInput = [0];
let firstNumber = null;
let secondNumber = null;


let activeOperator;
let loggedOperator;

let operatorActivated = false;
let justOperated = false;

let result;
let toDisplay;
let displayed



function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(){
    
    switch (loggedOperator) {
        case "add":
            result = add(firstNumber, secondNumber);
            firstNumber = result;
            break;

        case "subtract":
            result = sub(firstNumber, secondNumber);
            firstNumber = result;;
            break;

        case "multiply":
            result = multiply(firstNumber, secondNumber);
            firstNumber = result;;
            break;

        case "divide":
            result = divide(firstNumber, secondNumber);
            firstNumber = result;
            break;
    }
    
    if (isDoubleZeroDecimal()) {
        showDisplay(result);
    }
    else {
        showDisplay(result.toFixed(2));
    }
}

function logCurrent() {
    return parseFloat(currentInput.join(""));  
}

function isDoubleZeroDecimal() {
    toDisplay = result
        .toFixed(2)
        .toString()
        .split(""); 
    if (toDisplay[toDisplay.length - 1] === "0" && 
        toDisplay[toDisplay.length - 2] === "0" && 
        toDisplay[toDisplay.length - 3] === ".") {
            return true
        }
}
function addOperand(operand) {
    if (currentInput.length === 1 && currentInput[0] === 0){
    currentInput[0] = operand;
    }
    else{
    currentInput.push(operand);
    }
}

function showDisplay(string) {
    display.textContent = string;
    displayed = string
    
}

function clearInput(){
    currentInput = [0];
}

function clear() {
    clearInput();
    firstNumber = null;
    firstNumber = null;
    showDisplay("0");
    
}

buttons.addEventListener("click", (e) => {
    let clicked = e.target;
    switch (clicked.className) {
        case "btnNr":
            loggedOperator = activeOperator;
            operatorActivated = false;
            justOperated = false;
            let clickedNumber = clicked.textContent;

            // prohibit multiple zeros input
            if (clickedNumber === "0" && logCurrent() === 0) {
                showDisplay("0")
            }
            else {
                addOperand(clickedNumber);
                showDisplay(currentInput.join(""));
            }
            break;

        case "btnTop AC":
            clear();
            break;

        case "btnOperator":
            activeOperator = clicked.id;
            // prohibit multiple operation by changing mind on operator
            if (!(operatorActivated || justOperated)){
                if (firstNumber === null){
                    firstNumber = logCurrent();
                }
                else {
                    secondNumber = logCurrent();
                    operate()
                }
                clearInput(); 
            }
            operatorActivated = true;
            break;

        case "btnResult":
            secondNumber = logCurrent();
            operate();
            clearInput();
            justOperated = true;
            break;

        case ""
    }
})

// (!Number.isNaN(parseInt(currentInput.join(""))))