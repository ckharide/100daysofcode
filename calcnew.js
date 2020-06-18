var operatorSt = new Stack();
var numberSt = new Stack();
var opseen = false;
var isPriorityOp = false;
function showClock() {

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }


  if (target.classList.contains('operator')) {
    var opresult = target.value;
    opseen = true;
    if(opresult !== '='){
        operatorSt.push(opresult);
        if(operatorSt.size() >=1 && opresult != '*') {
            let result = evaluteOperatorStack(opresult);
            updateRunningDisplay(result);
        }
        updateRunningDisplay(numberSt.peek());
    }   
        
    else 
    {
        console.log("Inside equal");
        let result = evaluate(operatorSt, numberSt,opresult);
        updateRunningDisplay(result);
    }
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    reset();
    return;
  }

  addNumberStack(target.value);
  updateRunningDisplay(target.value);
  if(isPriorityOp === true){
    isPriorityOp = false;
    console.log("Inside priority Op");
    opresult = evaluate(operatorSt, numberSt,opresult);
    updateRunningDisplay(opresult);
    return;
  }
});
  
}

function updateCurrentDisplay(value){
  
    const display = document.querySelector('.calculator-screen').value;
    if(opseen === false)
        document.querySelector('.calculator-screen').value += value;
    else
        document.querySelector('.calculator-screen').value = value;
    opseen = false;
}

function updateRunningDisplay(value){
    console.log("Display value" , value);
    document.querySelector('.calculator-screen').value = value;
}

function evaluteOperatorStack(op){
    var number = [];
    op = op.trim();
    if(op == '=') {
        return evaluate(operatorSt, numberSt,op);
    }
    else if(op !== '=')
    {
        console.log("Pushing value" , op);
        operatorSt.push(op);
        if(op === '*' || op === '/') {
            isPriorityOp = true;
        }
        while(!numberSt.isEmpty()) {
            number.unshift(numberSt.pop());
        }
        let temp = number.join('');
        console.log(temp);
        var final = parseFloat(temp);
        numberSt.push(final);
        return final;
    }

}

function addNumberStack(val){
    numberSt.push(val);
}

function reset(){
    operatorSt = new Stack();
    numberSt = new Stack();
    updateRunningDisplay(0);
    opseen = true;
}

function evaluate(opstack , numstack, opvalue) {
    if(numstack.size() < 2) return opvalue;
    console.log("Operator value");
    var op1 =0, op2 = 0;
    let result = 0
   
    while(!numstack.isEmpty() && !opstack.isEmpty())
    {
        op1 = numstack.pop();
        op2 = numstack.pop();
        op1 = parseFloat(op1);
        op2 = parseFloat(op2);
        console.log("OP1 ==> " + op1 + "op2 ==> " + op2);
        if(!opstack.isEmpty()) {
            op = opstack.pop();
            switch(op) {
                case '+' : result = op1 + op2;
                           break;
                case '-' : result = op1 - op2;
                            break;
                case '*' : result = op1 * op2;
                           break;
                case '/' : result = op1 / op2;
                break;
            }
        }
        result = parseFloat(result);
        if(!numstack.isEmpty())
            numstack.push(result);
        else break;
    }
    return result;
    
}
 