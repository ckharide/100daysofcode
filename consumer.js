
const mystring = require('./baseutils.js');
console.log(mystring.lowercase("Hello"));


const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

const mygraph = require('./baseutils.js');
console.log(mygraph.roadgraph(roads));

const {find_path} = require("dijkstrajs");
let graph = {};
for (let node of Object.keys(roads)) {
    let edges = graph[node] = {};
    for (let dest of roads[node]) {
    edges[dest] = 1;
    }
}

console.log(find_path);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

const getTodo = (callback) => {
    setTimeout(() => {
        callback ({ text: 'Complete Code Example' })
    }, 2000)
}

const getTodoWithoutCallback = () => {
    setTimeout(() => {
         { text: 'Complete Code Example' }
    }, 2000)
}
//const todo = getTodo()
//console.log(todo.text);

getTodo(x => console.log(x.text));

const getTodoPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error  = false;
            if(!error) 
                resolve({text: 'Code complete'});
            else
                reject();
        },1000)
    })
}   

async function fetchTodo () {
    try { 
        const todo = await getTodoPromise()
        return todo;
    } catch (error) {
        console.log("Error occurred")
    }
}

fetchTodo().then(x => console.log(x.text)).catch(() => console.log('Err'));


function doNetworkCall() {
    return (Math.random() < 0.6) ? 'success' : 'error';
}

//Return a random Promise 
const fetchNetworkcall = () => {
    return new Promise((resolve , reject) => {
            setTimeout(() => {
                let api = '/url/com';
                if(doNetworkCall() === 'success')
                    resolve({responsebody : 'api' , code : 200 , error : 'false'});
                else
                    reject({responsebody : 'api' , code : 404 , error : 'true'});
            },500)
    })
}

// Act based on the promise if its success or failure. 
fetchNetworkcall().then(todo => {
    console.log("Code State " + todo.code + " Error State " + todo.error);
}).catch(errorstate => {
    console.log("Code State " + errorstate.code + " Error State " + errorstate.error);
})
