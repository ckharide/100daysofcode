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
  
f