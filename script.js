function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
    document.getElementById("display").value += operator;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    let display = document.getElementById("display");
    display.value = eval(display.value);
}