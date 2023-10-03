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
function operate(num1,num2) {
    if (operation == "+") {
        num1 = Number(num1)
        num2 = Number(num2)
        return add(num1,num2)
    }
    else if (operation == "-") {
        return subs(num1,num2)
    }
    else if (operation == "*") {
        return multi(num1,num2)
    }
    else if (operation == "/") {
        return division(num1,num2)
    }
}
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.buttons')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal-sign')
const clear = document.querySelector('.clear')
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
    if (operation == '') {
        operation = `${operator.innerText}`
        screenDisplay()
    }
    else if (operation != '') {
        operate(firstNumber,secondNumber)   
        firstNumber = operate(firstNumber,secondNumber)
        operation = `${operator.innerText}`
        secondNumber = ''
        screenDisplay()
    }
} 
))
equals.addEventListener('click',()=>{
    total = operate(firstNumber,secondNumber)
    firstNumber = total
    operation = ''
    secondNumber = ''
    screenDisplay()
})
clear.addEventListener('click',()=> {
    firstNumber = ''
    secondNumber = ''
    operation = ''
    screenDisplay()
})
