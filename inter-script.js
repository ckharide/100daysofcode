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
    
