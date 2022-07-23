//  Generic Variables
let screen = document.getElementById("screen");
let numberOne = "";
let numberTwo = "";
let operator = "";

//  Maths Functions
add = (num1, num2) => {
  return num1 + num2;
};
subtract = (num1, num2) => {
  return num1 - num2;
};
multiply = (num1, num2) => {
  return num1 * num2;
};
divide = (numerator, denominator) => {
  return parseFloat((numerator / denominator).toFixed(6));
};

//  Calculator
operate = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;

    default:
      return "Invalid Operation.";
  }

  return result;
};

function handleInput(input) {
  let number;
  if (operator === "") {
    numberOne += input;
    number = parseFloat(numberOne);
  } else {
    numberTwo += input;
    number = parseFloat(numberTwo);
  }

  screen.textContent = number;
}

function handleOperator(input) {
  if (numberTwo !== "") {
    calculate();
  }
  operator = input;
}

function calculate() {
  if (operator && numberOne && numberTwo) {
    let result = operate(
      operator,
      parseFloat(numberOne),
      parseFloat(numberTwo)
    );

    screen.textContent = result;

    numberOne = result;
    numberTwo = "";
  }
}

function clearScreen() {
  numberOne = "";
  numberTwo = "";
  operator = "";
  screen.textContent = "0";
}
