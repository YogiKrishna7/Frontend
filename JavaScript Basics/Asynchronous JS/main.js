/* Synchronous and Asynchronous */

/* 
Synchronous meaning executes line by line consecutively in a sequential manner, 
Code that waits for an operation to complete 
*/
// So this lines will execute one after one, like we can run task 2 first and then others,
//  meaning its the code that waits for an operation to complete

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

/* 
Asynchronous meaning allows multiple operations to be performed concurrently without waiting
meaning not blocking the code execution, meaning allowing the code run and end without waiting
found in 
I/O operations, network requests, fetching data
And handled using
Callbacks, Promises and Async/Await
*/

// like a time travellor, a time travller can move out of the flow of time, 
// but the rest of the world continues normally, time moves on, with or without it.

// For example we can use setTimeout function, one of the async functions

setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// So when you run this, you will get task 2, 3, 4 and then at last 4 meaning its out of sync, 
// because we used an async function called setTimeout.

// Now to make this asyncronous run as synchronous, we can use Callback, Promises and Async/Await.

/* 
Callback: a function that is passed as an argument to another function
used to handle asynchronous function
*/

