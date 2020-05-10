function reverseString(str) {

    // Approach 1 


    if (str.length == 0) return ''
    else {
        let index = str.length - 1;
        return str[index] + reverseString(str.slice(0,index))
    }

    /* Approach 2 . 
    if (str.length == 0 || str.length == 1 ) return str;
    let tempstr = []
    for (let k = str.length-1; k >= 0; k--){
        tempstr.push(str[k]);
    }
    return tempstr.join('');

    // Approach 3

    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
      }
      return reversedStr;*/
    
}

function findLongestWordLength(str) {
     let words = str.split(' ');
     let maxwordlen =  0;
     for (let i =0; i < words.length; i++){
         if(words[i].length > maxwordlen) 
           maxwordlen = words[i].length;
     }
     return maxwordlen;

     // return Math.max(...str.split(" ").map(word => word.length));
  }

  function largestOfFour(arr) {
    let maxarray = [];
    for (let i =0 ; i < arr.length; i++){
        totalmax = Math.max(...arr[i]);
        maxarray.push(totalmax);
    }
    return maxarray;
  }

  function confirmEnding(str, target) {
    if(target.length > str.length) return false;
    let start = (str.length - target.length);
    console.log(target);
    console.log(str.substring(start,str.length));
    return (str.substring(start,start.length) === target);
  }

  function repeatStringNumTimes(str, num) {
    return str;
  }

  function repeatStringNumTimes(str, num) {
    console.log("Num " , num);
    if(num <=1) return str;
    else 
    {
        return str + repeatStringNumTimes(str, num-1);
    }
  }

  
console.log(reverseString("Ma"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Open sesame", "same"));
console.log(repeatStringNumTimes("World",5));