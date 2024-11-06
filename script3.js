const display = document.querySelector('span')
let firstOperand = null
let currentText = null
let operator = ''

function firstProcess(clickedButton) {
  const targetText = clickedButton.target

  if (targetText.classList.contains('number')) {
    displayNumber(targetText.textContent)
    display.textContent = currentText
  } else if (clickedButton.target.classList.contains('dot')) {
    displayDot()
  } else if (targetText.textContent === 'C') {
    resetDisplay()
  } else if (targetText.classList.contains('operator')) {
    saveOperator(targetText.textContent)
  } else if (targetText.textContent === '=') {
    displayResult()
  }
}

function displayNumber(text) {
  if (currentText === null) {
    currentText = text
  } else {
    currentText += text
  }
}

function displayDot() {
  if (!currentText.includes('.')) {
    currentText += '.'
    display.textContent = currentText
  }
}

function resetDisplay() {
  display.textContent = "0"
  currentText = null
  firstOperand = null
}

function saveOperator(text) {
  if (firstOperand !== null && operator !== '') {
    const secondOperand = parseFloat(display.textContent)
    const result = calculate(firstOperand, secondOperand, operator)
    firstOperand = result
    display.textContent = result
  } else {
    firstOperand = parseFloat(display.textContent)
    //display.textContent = "0"
  }
  operator = text
  currentText = null
  console.log(`First Operand : ${firstOperand}, Operator: ${operator}`)
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '/':
      return num1 / num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
  }
}

function displayResult() {
  if (firstOperand !== null && currentText !== '') {
    const secondOperand = parseFloat(currentText)
    const result = calculate(firstOperand, secondOperand, operator)
    display.textContent = result
    firstOperand = result
    operator = ''
  }
}

document.querySelectorAll('.button').forEach((eachButton) => {
  eachButton.addEventListener('click', firstProcess)
})
