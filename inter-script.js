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