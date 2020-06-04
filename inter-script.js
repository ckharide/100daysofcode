// Sum all numbers in a range. 
function sumAll(arr) {
    let temparr = [];
    let count = 0;
    if(arr[0] < arr[1]) {
        while(count < (arr[1]-arr[0] + 1)) {
            temparr.push(arr[0] + count);
            count++;
        }
    }else {
        while(count < (arr[0]-arr[1] + 1)) {
            temparr.push(arr[1] + count);
            count++;
    }
  }
  return temparr.reduce(function (sum , accumulator) {
    return sum + accumulator;
  },0);
}


function sumVariant(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
}
  
console.log(sumAll([4, 1])); // return 10


function diffArray(arr1, arr2) {
    var newArr = [];
    var myArr = arr2.slice(0,arr2.length);
    //return newArr;
    for (let i =0; i < arr1.length; i++){
       myArr = myArr.filter(x => x != arr1[i]);
    }

    newArr.push(...myArr);
    myArr = arr1.slice(0,arr1.length);
    for (let j =0; j < arr2.length; j++){
        myArr = myArr.filter(x => x != arr2[j]);
     }

    newArr.push(...myArr);
    return newArr;

    /**** Another efficient way
     * 
     * function diffArray(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];

    function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
    }
    ***/
}


/**
 * 
 * @param {Remove all elements from the initial array that are of the same value as these arguments.} arr 
 */
function destroyer(arr) {
    /*let remaining = [];
    for(let k =1 ; k < arguments.length ; k ++){
        var i = arguments[0].indexOf(arguments[k]);
        arr.splice(i, 1);
    }
    return arr;*/

    var args = Array.from(arguments).slice(1);
    console.log(args);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

function filterout(arr1, arr2){
    return arr1.filter(item => (arr2.indexOf(item) !== -1))
}

function translatePigLatin(str) {
    // Check for vowel detection . 
    // Add way or ay. 
    // ay adding recurisve. 
    
    let vowel = "way";
    let c = "ay";
    if(isVowel(str[0]))
        return str + vowel;
    if(!isVowel(str.slice(0,str.length)))
        return str + c;
    else 
    {
        while(!isVowel(str[0])){
            str = str.slice(1,str.length) + str[0];
            console.log(str);
        }
    }
    return str + c;
  }

  function translatePigLatinNew(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    console.log(consonantCluster);
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
  
  // test here
  translatePigLatin("consonant");

  function isVowel(str) {
    let vowels = ['a','e','i','o','u'];
    var args = Array.from(vowels);
    for(let k =0 ; k < str.length; k++) {
        if(args.indexOf(str[k]) !== -1) {
            return true;
        }
    }
    return false;
  }
  
  console.log(translatePigLatinNew("rkda"));

  //console.log(isVowel("wkz"));

  // replace with case. 
  function myReplace(str, before, after) {
    const islower =  (/^[a-z]/).test(before[0]);
    const replacepattern = (islower === true ? after[0].toLowerCase() : after[0].toUpperCase()) + after.substring(1);
    return str.replace(before , replacepattern);
  }
  
console.log(myReplace("A quick brown fox jumped over the jumped lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us get back to more Coding Coding", "Coding", "algorithms"));

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("Destroyer " + destroyer([1, 2, 3, 1, 2, 3], 2, 3));

const islower =  (/^[a-z]/).test("1llo");
console.log(islower);
  
function pairElement(str) {
    let chars = str.split('');
    let temp = chars.map(x => [x,pairATCG(x)]);
    return temp;
  }
  
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));

function pairATCG(x) {
    let str = "";
    switch(x) {
        case "A" :  str = "T";
        break;
    
        case "T" :  str = "A";
        break;

        case "C" : str = "G";
        break;

        case "G" : str = "C";
        break;

        default: break;
    }
    return str;
}

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }

  function uniteUnique(arr) {
   var first = arguments[0];
   var remaining = Array.from(arguments).slice(1);
   let massive = first;
   remaining.filter(function(value){
       /*for(let i =0 ; i < value.length; i++) {
           if((massive.indexOf(value[i]) === -1)){
                massive.push(value[i]);
           }
       }*/
       let temp = value.filter(function(temp){
            return (massive.indexOf(temp) === -1);
       });
       massive.push(...temp);
   });
   return massive;
  }

  function uniteUniqueNew(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA, arrB) {
      //Apply filter to remove the duplicate elements in the array
    console.log(arrB);
      return arrA.concat(
        arrB.filter(function(i) {
          return arrA.indexOf(i) === -1;
        })
      );
    });
  
    return newArr;
  }
  
  
  console.log(uniteUniqueNew([1, 3, 2], [5, 2, 1, 4], [2, 1])); // 1, 3, 2, 5 ,4
  

  /**
   * Convert HTML Entities . 
   * @param {C} str 
   * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to 
   * their corresponding HTML entities.
   */

  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
console.log(convertHTML("Dolce & Gabbana"));
  
function truthCheck(collection, pre) {
  /*for(let k =0; k < collection.length; k++) {
    if(!collection[k].hasOwnProperty(pre))
    return false;
    if(!collection[k][pre])
    return false;
  }
  return true;*/

  return collection.every(function check(element , index , array){
       if((array[index][pre])){
         return true;
       }
       else return false;
  });

 
}

function truthCheckNew(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

//drop eleement. 
function dropElements(arr, func) {
  return arr.filter( (item , index , arr) => {
   // console.log("item " + item + "function eval" + func(item));
    if(func(item) == false){
      index = index + 1;
    }
    else 
      return arr;
  });
}

function steamrollArray(arr , flat = []) {
  for(let k =0 ; k < arr.length; k++) {
    if(Array.isArray(arr[k])) {
      steamrollArray(arr[k], flat);
    }
    else {
       flat.push(arr[k]);
    }
  }
  return flat;
}

function steamrollArrayNew(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArrayNew(flat) : flat;
}

//Convert binary to string
function binaryAgent(str) {
  // break binary into a series of strngs. 
  let temp = str.split(' ').map(x => stringconv(x)).join("");
  return temp;
}

//convert String to codes. 
function stringconv(arr) {
  let stringarray= [].concat(String.fromCharCode(convertBtoInteger(arr)));
  return stringarray;
}

// Convert value to Binary
function convertBtoInteger(arr){
  let value = 0;
  let n = arr.length;
  for(let k =0 ; k < arr.length; k++){
    value = ((parseInt(arr[k]) && 1) << (n - (k + 1))) + value;
  }
  return value;
}

var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};


function orbitalPeriod(arr) {
  for (var elem in arr) {
    console.log(arr[elem]);
  }
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var orbPeriod = Math.round(a * Math.sqrt(c / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0],arr[1]);
  let temp = [];
  for(let k = Math.min(arr[0], arr[1]); k <= max; k++) {
    temp.push(k);
  }
  return getlcm(temp);
}

function getlcm(arr){
  let lcm = findlcm(arr[0], arr[1]);
  for(let i = 2; i < arr.length; i++) {
    lcm = findlcm(lcm, arr[i]);
  }
  return lcm;
}

function findlcm(a , b) {
  let m = Math.max(a,b);
  while(true) {
    if(m % a === 0 && m % b === 0)
    return m;
    m++;
  }
  return m;
}


console.log("Smallest common value " + smallestCommons([2,10]));

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

var bob = new Person("Bob Ross");
bob.getFullName();

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
bob.setFirstName('Chandra');
console.log(bob.getFirstName());

//console.log("Binary Array " + convertBtoInteger([0,1,1,1,0,0,1,0]));
//console.log("Converted String Arrayy" + stringconv([65,72, 91, 66]));
console.log(binaryAgent("01000001 01110010 01100101"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));

console.log("Flatten array " + steamrollArray([1, [2], [3, [[4]]]])); // 1,2,3,4 

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));


function range(min , max) {
  let arr = [];
  let init = Math.min(min, max);
  let final = Math.max(min, max)
  while(final >= init) {
    arr.unshift(final);
    final = final -1;
  }
  return arr;
}



console.log("Console Array " , range(2,-4));

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, 
{"user": "Po", "sex": "female", "age": 4}], "age"));

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));

console.log(truthCheck([{"single": "yes"}], "single"));

console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));


