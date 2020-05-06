let simpleArray = ['one', 2, 'three', true, false];
console.log(simpleArray.length);

// modify the array 

function mixedNumbers(arr) {
    // Only change code below this line
  
    // Only change code above this line
    arr.unshift("I", "2",  "three")
    arr.push("7", "VIII", "9")
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));