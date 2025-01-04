/* Synchronous and Asynchronous */

/*
Synchronous meaning executes line by line consecutively in a sequential manner,
Code that waits for an operation to complete
*/

/*
So this lines will execute one after one, like we can run task 2 first and then others,
meaning its the code that waits for an operation to complete
*/

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

/*
Asynchronous meaning allows multiple operations to be performed concurrently without waiting
meaning not blocking the code execution, meaning allowing the code run and end without waiting
found in
I/O operations, network requests, fetching data
And handled using
Callbacks, Promises and Async/Await
*/

/*
like a time travellor, a time travller can move out of the flow of time,
but the rest of the world continues normally, time moves on, with or without it.
*/

/* For example we can use setTimeout function, one of the async functions */

// setTimeout(() => console.log("Task 1"), 3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

/* So when you run this, you will get task 2, 3, 4 and then at last 4 meaning its out of sync,
because we used an async function called setTimeout.

Now to make this asyncronous run as synchronous, we can use Callback, Promises and Async/Await.
*/

/*
Callback: a function that is passed as an argument to another function
and they are used to handle asynchronous function like

1. reading a file
2. network requests
3. interacting with a Database

these tasks takes time to complete and JS doesnt wait for a process to finsh, meaning when we reading a file,
and if it takes some time to read it, JS doesnt wait for that to complete.
so with callbacks we can tell JS like "when you are done reading the file, then send a network request" so we are making JS run one thing after another.
*/

/* Example 1:  */

// hello();
// goodbye();

// function hello(){
//     console.log("Hello");
// }

// function goodbye(){
//     console.log("GoodBye");
// }

/* Okay this will run normally, but what if hello function takes longer time to finish ? like the following,
now here the output would be like first Goodbye will print and then After 3 sec the Hello will be printed*/

// hello();
// goodbye();

// function hello() {
//     setTimeout(() => {
//         console.log("Hello");
//     }, 3000);
// }

// function goodbye() {
//     console.log("GoodBye");
// }

/* Now to make to tell JS run hello and then the goodbye functions, we gonna use callback */

// hello(wait);

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function wait() {
//     console.log("Wait");

// }

// function leave() {
//     console.log("Leave");
// }

// function goodbye() {
//     console.log("GoodBye");
// }

/* We are calling the hello function, followed by the next function, so by using callbacks,
we are making sure that once the hello function runs,
the function that is passed a an parameter is executed next */

/* Now when you write the callback method with () it will be called immediately, so you shouldnt write () if you dont want to run it immediately
    dont do like this hello(leave());
    do like this hello(leave);
*/

/* Example 2: */

// sum(displayPage, 7, 7);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayResult(result) {
//     console.log(result);
// }

// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

/* 
Callback hell/pyramid of doom: 
A situation in JS where callbacks are nested within other callbacks to the extend where the code is difficult to read.

Its an old way to work with asynchronous functions.
Use promises + async/await to avoid callback hell.

or nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)
this style of programming can become difficult to understand and manage
*/

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);

// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);

// }
// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1700);
// }

// task1(() => {
//     task2(()=>{
//         task3(() => {
//             task4(() => {
//                 console.log("ALL TASKS ARE COMPLETE");
//             });
//         });
//     });
// });

// Callback hell example 2: 

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// };

// console.log("getting data 1");
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         });
//     });
// });

/* So after doing the callback and looking a callback hell, 
like we might get a doubt that, then i should not use callback at all ?
and we can use callback and in fact we will use callbacks a lot,
but when the situation looks like that it may become callback hell, then we should not use callbacks
*/

/* So to prevent callback hell, we wont use callback, instead we'll use promises.
now promise is like a value that is unknown now, that we may know in future.
so is like a eventual completion of task in the fucture.
*/

/*
so for a real world example,

lets imagine we are booking a ride, when you request a ride, the driver will make a promise to pick you up.
while you wait, its pending/unfullfilled and in future/ after few min if everything goes well, the driver will resolve to pick you up, meaning your ride is fulfilled.
but in some cases the driver may reject the ride, meaning your ride is rejected.
either way the original/your request is settled/completed.

meaning a promise will eventually get completed, weather its result a success or not, we dont know but the promise is done/settled etc..
*/

/*
So now promise is an object in JS
its a solution to callback hell.
*/

/* 
to create a promise object, we will write new Promise (which is a class) and to create a promise, we'll pass a function and in that function, we'll have two handlers
which are also functions/callbacks of Promise object.
one is resolve and another one is reject
*/

/*
resolve means when we run a function, it completes the promise and the job is done successfully
reject means when we run a function, it completes the promise but the job is not done successfully
so in both cases the promise will be settled no matter what happens.
the JS will automatically create a resolve and reject methods/callbacks to a promise, when we create one
*/

/* 
promise has three states
pending, resolved and rejected

we will resolve with a result etc
and reject with an error object
*/

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Promise is resolved"); // This is a resolve message.
//     // reject("Promise is rejected"); // This is a rejected message.

// })

/* 
so when we run the promise, we will get promise state as resolved or rejected
and promise result meaning the message that we passed 
*/

/* Now in general cases we dont acctually create promises ourself, we will handle the promises that the api will return, anyway lets see how they are created */

// let promise = function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("Success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

/* 
now to use a promise, we have two functions, then and catch.
then is to do after the promise is done successfully/ fulfill
catch is to do after the promise is rejected.

now the then will get a parameter automatically called result or respond
and for catch will get a parameter will get error parameter.

these two let us get the value of the respond, success or error

so we can pass a function in the then and catch.
*/

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Resolved");
//         // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise is resolved", res);
// })

// promise.catch((err) => {
//     console.log("Promise is rejected", err);
// });

/* Promsise chain */

// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// let p1 = asyncFunction1();
// console.log("fetching data 1...");
// p1.then((res) => {
//     console.log(res);
// });

// let p2 = asyncFunction1();
// console.log("fetching data 2...");
// p2.then((res) => {
//     console.log(res);
// });

/* 
if we do this, both will print at the same time, not one after another which we dont want
what we want is, first we want data 1 and then after that we want data.

so for that we can use promise chaining.
*/

// console.log("fetching data 1...");
// asyncFunction1().then((res) => {
//     console.log("fetching data 2...");
//     asyncFunction2().then((res) => { })
// });

/* this is promise chaining, meaning after one then, we are chaining another chain to it*/

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             // reject("error");
//         }, 2000);
//     })
// }

/* promise chain */
// getData(1)
//     .then((res) => {
//         return getData(2);
//     }).then((res) => {
//         console.log(res);

//     });

/* 
so this is an actuall promise chaining so here

getData(1) is called, which is assumed to return a promise.
When this promise resolves, the getData(2) is called and return it.
and if that also is resolved then run the block meaning the log statement.


Call getData(1):

getData(1) is invoked, and it returns a promise.

When this promise resolves successfully, it moves to the first .then block.
Call getData(2):

Inside the first .then, 

getData(2) is called, which also returns a promise.

This promise is returned by the .then block, creating a chain.
Handle the result of getData(2):

When the promise returned by getData(2) resolves, the second .then block is executed, and console.log(res) runs with the result.
*/

// promise chaining
// console.log("getting data 1");
// getData(1)
//     .then((res) => {
//         console.log("getting data 2");
//         return getData(2);
//     }).then((res) => {
//         console.log("getting data 3");

//         return getData(3);
//         console.log("getting data 4");

//     }).then((res) => {
//         console.log("Success");
//     });


/* callback hell */
// console.log("getting data 1");
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         });
//     });
// });

/* 
if we compare them both, i mean promise chain and callback hell, 
the promise chain is a litte better but also can be difficult to understand.

So finally to make it really easy than these both, we gonna use async/await.
*/

/* Async-Await keywords goal is to make Asynchronous code very easy compared to previous both,
so we will use async keyword with a function and that function always returns a promise.

we can make any normal function as async function with the keyword


*/

// async function hello() {
//     console.log("Hello");
// }

/*
so when we run this, this will return an promise, even though we didnt define anything like which promise to return, we didnt even return anything.
meaning the async function will give us a promise no matter what.

and the await keyword pauses the execution of the whole async function until the promise is settled.

like when we call a function which returns a promise, 
and we create a function then when we put async to the function,
and use await, it will pause the current function until the promise is settled, so until the promise is pending, we will be just waiting.

we can only use await keyword inside an async function.
*/

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200); // represents a successful api call
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api(); // 1st call
//     await api(); // 2nd call
// }

// getWeatherData();

/*
mainly in other two ways, we were having problem/confusion on how to make the one operation finsh first and then other one
so with async/await gives us a easy syntax to do that
*/


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             // reject("error");
//         }, 2000);
//     })
// }


// promise chaining
// console.log("getting data 1");
// getData(1)
//     .then((res) => {
//         console.log("getting data 2");
//         return getData(2);
//     }).then((res) => {
//         console.log("getting data 3");

//         return getData(3);
//         console.log("getting data 4");

//     }).then((res) => {
//         console.log("Success");
//     });


/* callback hell */
// console.log("getting data 1");
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4)
//         });
//     });
// });

/* Async-Await */
// async function getAllData() {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");

//     await getData(2);
//     console.log("getting data 3...");

//     await getData(3);
//     console.log("getting data 4...");

//     await getData(4);
//     console.log("getting data 5...");

//     await getData(5);
//     console.log("getting data 6...");

//     await getData(6);
//     console.log("getting data 7...");

//     await getData(7);
// }

// getAllData();

/* 
so as you can see, this is easy to understand and we dont have to use .then etc
and we dont use .then etc in this way genarally
and in general we use Async-Await mostly.

here we have one problem, this is we have to call the async function to run the code.

here we can use IIFE means Immediately Invoked Function Expression,
this one is a function that is called immediately as soon as it is defined.

so these are just functions that doesnt have any name and 
only runs/used once and right after we define them, we dont have to call them separatly.

it can be a normal fuction, arrow function or an async one too,

the function itself is wrapped inside () and right after that we use () to call it.

(function () {
    //..
})();

(() => {
    //..
})();

(async () => {
    //..    
})();

*/

/* So here we gonna use IIFE on this function, we can use them with api calls etc */
// (async function () {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");

//     await getData(2);
//     console.log("getting data 3...");

//     await getData(3);
//     console.log("getting data 4...");

//     await getData(4);
//     console.log("getting data 5...");

//     await getData(5);
//     console.log("getting data 6...");

//     await getData(6);
//     console.log("getting data 7...");

//     await getData(7);
// })();

/*
Use Callbacks for simple, one-off/one time asynchronous tasks.
Use Promises for chaining multiple asynchronous operations.
Use Async/Await for clean and readable code, especially when dealing with complex asynchronous workflows.
*/