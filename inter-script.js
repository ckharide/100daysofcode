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

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log("Destroyer " + destroyer([1, 2, 3, 1, 2, 3], 2, 3));


  
  
