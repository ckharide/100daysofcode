function reverseString(str) {

    // Approach 1 


    if (str.length == 0) return ''
    else {
        let index = str.length - 1;
        return str[index] + reverseString(str.slice(0,index))
    }

    // Approach 2 . 
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
      return reversedStr;
    
}
  
console.log(reverseString("Ma"));