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
 // console.log(copyMachine([1, 2, 3], 5));


  function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length;i++) {
       // console.log(arr[i]);
        if(arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
  }



  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));

  // Accessign an element property via element[property ] or element.property

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    /*Jeff: {
      age: 32,
      online: true
    },*/
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {

    return obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff')
    
  }

  function countOnline(usersObj) {
    let count = 0
    for(let key in usersObj) {
        if(usersObj[key]['online'] == true) {
            count = count+1;
        }
    }
   // console.log(count)
    return count
  }
  
  //temp = countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } });
  //console.log(temp);

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    if (userObj.hasOwnProperty('data')) {
        userObj['data']['friends'].push(friend);
        return userObj['data']['friends']
    }
  }

  console.log(addFriend(user, "Chandra"));
  console.log(user);
  