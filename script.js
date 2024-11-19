let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearResult() {
    currentInput = "";
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression
        document.getElementById("result").value = currentInput;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
