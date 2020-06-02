 /**
  * Check if its a palindrome or not. 
  * @param {} str 
  */
function palindrome(str) {
    let temp  = str.replace(/[^A-Za-z0-9]/g, '');
    let n  = temp.length;
    for(let k =0 ; k < temp.length/2 ; k++){
        if(temp[k] !== temp[n-(k + 1)]) return false;
    }
    return true;
}

const romanmappings = {
    1 : "I",
    5 : "V",
    10 : "X",
    100: "C",
    50 : "L",
    500 : "D",
    2 : "II",
    3 : "III",
    4 : "IV",
    9 : "IX",
    8 : "VIII"
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("almostomla %&&&dy33"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("never odd or even"));
console.log(palindrome("_eye"));

var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    var romanized = "";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };

  console.log(convertToRoman(447));
  
  function rot13(str) {
    // Break string into words 
    // Consider only capital case. 
    // drop everytthign else/

    let words = str.split(' ');
    return words.map(word => rotceaser(word)).join(' ');
  }

  function rotceaser(str) {
      var start = "A".charCodeAt(0);
      var end = "Z".charCodeAt(0);
      let temp = [];
      for(let k = 0; k < str.length; k++) {
        const isUpper =  (/[A-Z]/).test(str[k]);
        temp[k] = str[k];
        if(isUpper === true) {
            var code = (str.charCodeAt(k) + 13);
            code =   (code > end ) ? start + (code % end) - 1 : code;
            temp[k] = String.fromCharCode(code);
        }
      }
      return temp.join('');
  }
  
  console.log(rot13("QBT."))
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));