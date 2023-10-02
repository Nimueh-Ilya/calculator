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
const firstNumber = ""
const secondNumber = ""
const operation = ""