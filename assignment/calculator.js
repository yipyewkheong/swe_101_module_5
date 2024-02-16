let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(displayValue);
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid expression");
    }
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    alert("Error: " + error.message);
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
