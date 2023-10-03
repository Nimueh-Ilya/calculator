function add(num1,num2) {
    return num1+num2
}
function subs(num1,num2) {
    return num1-num2
}
function multi(num1,num2) {
    return num1*num2
}
function division(num1,num2) {
    return num1/num2
}
function operate(num1,num2,operator) {
    if (operator == "+") {
        return add(num1,num2)
    }
    else if (operator == "-") {
        return subs(num1,num2)
    }
    else if (operator == "*") {
        return multi(num1,num2)
    }
    else if (operator == "/") {
        return division(num1,num2)
    }
}
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.buttons')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
let firstNumber = ""
let secondNumber = ""
let operation = ""
let total = 0
function screenDisplay() {
    screen.innerText = `${firstNumber} ${operation} ${secondNumber}`
}
numbers.forEach(number =>number.addEventListener('click',()=>{
    if (operation == '') {
        firstNumber = firstNumber + number.innerText
        screenDisplay()
    }
    else if (operation != '') {
        secondNumber = secondNumber+number.innerText
        screenDisplay()    }
}) )
operators.forEach(operator => operator.addEventListener('click',()=>{
    operation = `${operator.innerText}`
    screenDisplay()
} 
))

