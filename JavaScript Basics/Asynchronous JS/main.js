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
Use promises + async/await to avoid callback hell
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