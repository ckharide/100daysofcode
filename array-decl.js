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

  let greetings = ['whats up?', 'hello', 'see ya!'];
  greetings.pop();
  console.log(greetings);

  greetings.shift();
  console.log(greetings);

  greetings = ["Hello" , "World" , "NewYork" , "Chile"]
  let temp = greetings.splice(1,1);
  console.log("logging after splice " + greetings);
  console.log(temp)

  temp = greetings.splice(1,3);
  console.log(greetings);
  console.log(temp);

  // first param => Index
  // second param => number of elementts to remove 
  // third param ==> elements to add. 
  greetings.splice(0,1,"Chandra" , "Stays" , "At")
  console.log(greetings);

  let colors = ["Red" ,"Green", "Blue" , "White" , "Orange"]
  console.log(colors.slice(0,colors.length))

  // Copies arrays using spread.
  function copyMachine(arr, num) {
    let newArr = [];
    while (num > 0) {
      //let temp = [...arr]
      newArr.push([...arr])
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  console.log(copyMachine([1, 2, 3], 5));

