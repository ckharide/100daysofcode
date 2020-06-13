function showClock() {
document.querySelector('.calculator-keys').addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  updateDisplay(target.value);
  console.log('digit', target.value);
});
  
}

function updateDisplay(value){
    const display = document.querySelector('.calculator-screen').value;
    console.log("Dips Old Value -- " + display);
    document.querySelector('.calculator-screen').value += value;
}
