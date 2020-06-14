var operatorSt = new Stack();
var numberSt = new Stack();
var opseen = false;
function showClock() {

document.querySelector('.calculator-keys').addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    updateRunningDisplay(target.value);
    let result = updateOperatorStack(target.value);
    opseen = true;
    updateRunningDisplay(result);
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

  updateCurrentDisplay(target.value);
  updateNumberStack(target.value);
  console.log('digit', target.value);
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
    document.querySelector('.calculator-screen').value = value;
}

function updateOperatorStack(op){
    var number = [];
    console.log("Inside Operator " , op);
    if(op === '==') {
        evaluate(operatorSt, numberSt);
    }
    if(op !== '==')
    {
        console.log("Value of op" ,op);
        operatorSt.push(op);
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

function updateNumberStack(val){
    numberSt.push(val);
}

function reset(){
    operatorSt = new Stack();
    numberSt = new Stack();
}

function evaluate(opstack , numstack) {
    var op1 =0, op2 = 0;
    let result = 0
    while(!numstack.isEmpty() )
    {
        op1 = numberSt.pop();
        op2 = numberSt.pop();
    }
    if(!opstack.isEmpty) {
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
    console.log(result);
    return result;
}
