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


  // confirm ending. 
  function confirmEnding(str, target) {
    if(target.length > str.length) return false;
    let start = (str.length - target.length);
    console.log(target);
    console.log(str.substring(start,str.length));
    return (str.substring(start,start.length) === target);
  }


  // 
  

  // repeat string n number of times. 
  function repeatStringNumTimes(str, num) {
    console.log("Num " , num);
    if(num <=1) return str;
    else 
    {
        return str + repeatStringNumTimes(str, num-1);
    }
  }

  // truncate the string to return ellipsis. 
  function truncateString(str, num) {
    let substringextract = str.substring(0,num);
    if(num < str.length) {
      return substringextract + '...';
    }
    return substringextract;
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8)


  //Applying a function so that it returns the first element. 
  function findElement(arr, func) {
    let num = 0;
    for(num = 0; num < arr.length; num++) {
      if(func(arr[num])) return num;
    }
    return 'undefined';
  }

 /* function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
      updatedTitle[st] = newTitle[st]
        .toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
  }*/
  

  function frankenSplice(arr1, arr2, n) {
    if(n > arr2.length) {
       n = arr2.length -1;
    }
    let firstarray= arr1.slice();
    /*for(let k =0 ; k < firstarray.length; k++ ) {
      arr2.splice(n,0,firstarray[k]);
      n++;
    }*/
    arr2.splice(n , 0 , ...arr1);
    return arr2;
  }
  
console.log(reverseString("Ma"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Open sesame", "same"));
console.log(repeatStringNumTimes("World",5));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-", 1));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(findElement([1, 5, 6, 7], num => num % 2 === 0));
//console.log(titleCase("I'm a little tea pot"));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));