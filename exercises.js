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

  function everyModified(arr , pred) {
      // Use some 
      let truth = true;
      for(let k in arr){
          truth = truth && arr.slice(k,k+1).some(pred);
          if(truth === false) return truth;
      }
      return truth;
  }

  function every2(array, predicate) {
    temp = !array.some(element => !predicate(element));
    return temp;
  }
  

  function isBiggerThan10(element, index, array) {
    return element > 10;
  }

  class Vec {
      constructor(x, y) {
          this.x = x;
          this.y = y;
      }

      get length(){
          return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
      }
  }

  Vec.prototype.add = function(vec) {
      this.x = this.x + vec.x;
      this.y = this.y + vec.y;
  }

  Vec.prototype.minus = function(vec) {
    this.x = this.x - vec.x;
    this.y = this.y - vec.y;
}


/**
 * Groups class
 * 
 */
class Group {
    constructor() {
        this.members = [];
    }

    add(elem) {
        if(this.members.indexOf(elem) === -1)
        this.members.push(elem);
        return this;
    }

    delete(elem) {
        if(this.members.indexOf(elem) !== -1){
            this.members.splice(this.members.indexOf(elem),1);
        }
    }

    
}

Group.prototype.print = function(){
        console.log(this.members);
}
  console.log(arrayToList([1,2,3,4]));

  console.log(every2([6, 5, 8, 2, 4],function(x) { return x > 1; }));

  console.log(everyModified([6, 5, 8, 2, 4],function(x) { return x > 1; }));

  var vec = new Vec(2,6);
  var newvec = new Vec(4,2);

  vec.add(newvec);
  console.log(vec); 
  console.log(vec.length);

  var group = new Group();
  group.add(20).add(10).delete(10);
  group.print();
  console.log(group);

  /*function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
  }

  promptDirection("K");*/

  const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
    };

    function withBoxUnlocked(pred){
        box.unlock();
        try {
            box.pred;
        } catch(error) {
            console.log("Not a valid function" , pred);
        }
        finally{
            box.lock();
        }
    }

    withBoxUnlocked(box.lock());
    console.log(box.locked);

    const x = 1;
    function evalAndReturnX(code) {
    eval(code);
    return x;
    }

    console.log(evalAndReturnX("var x = 4"));
    
    const {parse} = require("ini");
    console.log(parse("x = 10\ny = 20"));
