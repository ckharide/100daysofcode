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


  function telephoneCheck(str) {
    let pass = (/[^1-9]+[\s](-)/).test(str);
    console.log("Regex " + pass);
  }
  
  telephoneCheck("555-454-5555");

  

  function checkCashRegister(price, cash, cid) {
    var objInsufficent = {status: "INSUFFICIENT_FUNDS", change: []};
    var objsufficent = {status: "CLOSED", change: cid};

    const denom = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
      ];

    let changevalue = Number((cash - price).toFixed(2));
    let totalvalue = cid.reduce(function (accumulator , currentvalue) {
        return accumulator + currentvalue[1];
      },0);
    if(totalvalue <= changevalue) {
        return (totalvalue < changevalue) ? objInsufficent : objsufficent;
    }

    let objectarray = [];
    let mycid = cid;
    
    for(let k = denom.length-1 ; k >=0 ; k--){
        let orig = Number(denom[k][1].toFixed(2));
        let compare = Number(mycid[k][1].toFixed(2));
        if(changevalue > compare) 
        {
          changevalue = Number((changevalue - compare).toFixed(2));
          mycid[k][1] = compare;
        } 
        else 
        {
            if(changevalue >= orig)
            {
              let balance = 0;
              while(changevalue >= orig) {
                changevalue = Number((changevalue - orig).toFixed(2));
                balance += orig;
                if(changevalue === 0.00) break;
              }
              mycid[k][1] = balance;
            }
        }
        if(changevalue === 0.00) {
            console.log("Denom value  ==> "   , mycid);
        }
        
    }
    return mycid;
  }
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  //["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  //console.log([["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
  //["TWENTY", 60], ["ONE HUNDRED", 100]]);

  var temp = checkCashRegister(19.5,20,[["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
  ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  console.log(temp);

  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));