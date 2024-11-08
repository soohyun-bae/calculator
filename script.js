const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')


buttons.forEach((eachButton) => {
  eachButton.addEventListener('click', () => { // 각 버튼에 클릭 이벤트 추가
    const text = eachButton.textContent
    let displayText = display.textContent

    let firstOperand = '';
    let operator = '';

    if (text === 'C') {
      displayText = '0'
    }

    if (displayText === '0') { // 0일때
      if (eachButton.classList.contains('number')) {
        displayText = text
      } else if (eachButton.classList.contains('dot')) {
        displayText = '0.'
      }
    } else { // 0 아닐 떼
      if (eachButton.classList.contains('number')) {
        displayText += text
      } else if (eachButton.classList.contains('dot')) {
        displayText += displayText.includes('.') ? '' : '.'
      } else if (eachButton.classList.contains('operator')) {
        if (firstOperand === '') {
          operator = text
          firstOperand = displayText
          displayText = '0'
          console.log(`First Operand: ${firstOperand}, Operator: ${operator}`)
        }
      }
    }
    const calculate = (num1, num2, num3) => {
      
    }

    display.textContent = displayText
  })
})

