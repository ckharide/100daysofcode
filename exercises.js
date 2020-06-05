function isRecEven(n) {
    // O is odd 1 is even. 
    if(n === 0) return true;
    if(n === 1) return false;
    return n > 0 ? isRecEven(n-2) : isRecEven(n + 2);
}

console.log(isRecEven(-1));

// [1,2,3] => { value : 1 , rest : { value :2 , rest : null}}
function createListStruct(arr, myobj) {
    if(arr.length === 1) {
        return {value : arr[0] ,rest : null}
    }
    else 
    {
        myobj = {value : arr[0], rest : createListStruct(arr.slice(1,arr.length))};
    }
    console.log(myobj);
    return myobj;

    
}

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }

createListStruct([1,2,3,4],{});
