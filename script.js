const display = document.querySelector(".display")
const buttons = document.querySelector(".buttons")
let runningTotal = []

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function addOperand(operand) {
    runningTotal.push(operand)
}

function showDisplay() {
    let toDisplay = runningTotal.join("");
    display.textContent = toDisplay;
    
}
function isZero() {
    if (runningTotal.length === 0 || (runningTotal.length === 1 && runningTotal[0] === "0"))
        return true
}

function clear() {
    runningTotal = []
    display.textContent = "0"
    console.log(runningTotal)
}

buttons.addEventListener("click", (e) => {
    let target = e.target;
    switch (target.className) {
        case "btnNr":
            let pressedNr = target.textContent;
            if (pressedNr === "0" && isZero()) {
                display.textContent = "0"
            }
            else {
            addOperand(pressedNr);
            showDisplay();
            }
            break;
        case "btnTop AC":
            clear();
            break;
    }
})

