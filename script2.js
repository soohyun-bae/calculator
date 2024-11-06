const display = document.querySelector('span')
let firstOperand = null
let currentText = null
let operator = ''

function firstProcess(clickedButton) {
  const targetText = clickedButton.target.textContent

  if (clickedButton.target.classList.contains('number')) {
    displayNumber(targetText)
  } else if (clickedButton.target.classList.contains('dot')) {
    displayDot()
  } else if (targetText === 'C') {
    resetDisplay()
  } else if (clickedButton.target.classList.contains('operator')) {
    saveOperator(targetText)
  } else if (targetText === '=') {
    displayResult()
  }
  currentText = display.textContent
}

function displayNumber(text) {
  if (display.textContent === '0') {
    display.textContent = text
  } else{
    display.textContent += text
  }
}

function displayDot() {
  if (!currentText.includes('.')) {
    display.textContent += '.'
  }
}

function resetDisplay() {
  display.textContent = "0"
  currentText = ''
  firstOperand = null
}

function saveOperator(text) {
  if (firstOperand !== null && operator !== '') {
    const secondOperand = parseFloat(currentText)
    const result = calculate(firstOperand, secondOperand, operator)
    firstOperand = result
    display.textContent = result
  } else {
    firstOperand = parseFloat(currentText)
    display.textContent = "0"
  }
  operator = text
  console.log(`First Operand : ${firstOperand}, Operator: ${operator}, curren: ${currentText}`)
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
