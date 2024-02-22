let firstNumber="";
let secondNumber="";
let operator="";
function appendNumber(num){
    if(operator===""){
        if (firstNumber === "" && num === '.') {
            firstNumber += "0.";
        } else {
            firstNumber += num;
        }
        document.getElementById("result").value = firstNumber;
    }
    else{
        if (secondNumber === "" && num === '.') {
            secondNumber += "0.";
        } else {
            secondNumber += num;
        }
        document.getElementById("result").value = firstNumber + "" + operator + "" + secondNumber;
    
    }
}
function setOperator(op){
    operator=op;
    document.getElementById("result").value=firstNumber+""+operator;
}
function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseFloat(firstNumber)+parseFloat(secondNumber);
            break;
        case '-':
            result=parseFloat(firstNumber)-parseFloat(secondNumber);
            break;
        case '*':
            result=parseFloat(firstNumber)*parseFloat(secondNumber);
            break;
        case '/':
            result=parseFloat(firstNumber)/parseFloat(secondNumber);
            break;
        case '%':
            result=parseInt(firstNumber)%parseInt(secondNumber);
            break;
        case '^':
            result=Math.pow(parseFloat(firstNumber), parseFloat(secondNumber)); 
            break;
        
    }
    document.getElementById("result").value=result;
}
function clearResult(){
    firstNumber="";
    secondNumber="";
    operator="";
    document.getElementById("result").value="";
}