// /* Shorthand Operators */

// let num = 7;

// num += 2;

// num -= 2;

// num++;

// num--;

// let n = 7;

// let x = n++;
// console.log(x, n); // post increment
// let y = ++n;
// console.log(y, n); // pre increment

// /* We can compare number to a number, a string to string (uses ASCII values), and also we can compare a number to string and string to number */

// console.log(7 < 6);
// console.log("7" > 6);
// console.log("pen" < "pencil");
// console.log(7 === 7);
// console.log(7 == 7);
// console.log("7" == 7);
// console.log("7" === 7);

// /* Logical Operators */

// let x = 7, y = 8, z = 9;

// let result = x < y; // without any logical operators

// let r = x < y && x < z; // here both are true

// let r1 = x < y && x > z // here one is false so it prints false

// let r2 = x < y || x > z // here one is false so it prints false

// console.log(result);
// console.log(r);
// console.log(r1);


// let num1 = 10;
// let num2 = 9;
// let num3 = 7;

// if (num1 % 2 == 0) {
//     console.log(`${num1} is even`);

// } else if (num2 % 2 == 0) {
//     console.log(`${num2} is even`);

// }
// else if (num3 % 2 == 0) {
//     console.log(`${num3} is even`);
// }

// /* ternary operator (?:) */
// let i = 10;
// let res;

// res = i % 2 === 0 ? "even" : "odd"
// console.log(res);

// /* Basically to run a statement multiple times, we use loops*/
// /* Initialize, condition, increment*/

// /* while, checks the condition and as long as the condition is true it will loop through */
// let counter = 6;

// while (counter <= 10) {
//     console.log("Hello");
//     counter++;
// }

// /* Do While, it runs the code first and then starts checking the condition */
// let i = 10;

// do {
//     console.log("hi", i);
// } while (i <= 5);

// /* For loop */
// /* now in while and do while loops we do initialize, condition, increment separatly, now to combile all three into a one line, we can use a for loop */
// for (let i = 0 /*this is initialize step*/; i < 10 /* This is the condition */; i++ /* This is the increment step*/) {
//     console.log("Hello For Loop");
// }

// /* Nested Loops */
// for (i = 1; i <= 5; i++) {
//     console.log("Hi");
//     for (let j = 0; j <= 5; j++) {
//         console.log("Hello");
//     }
// }

// /* When we know the starting point and the ending point, for loop is the best*/
// /* When we dont know the starting and ending point but we know the condition, the while loop is best*/

// let num = 564782;
// let lastDigit;
// let num2 = 0;

// while (num > 0) {
//     lastDigit = num % 10;
//     num2 = num2 * 10 + lastDigit;
//     num = parseInt(num / 10);

//     num2 + num;
// }

// console.log(num2);

// /* Object represents a real world thing in the virtual world, like in real world if we have a laptop, it will have some info/properties for it */

// let person = {
//     name: "yogi",
//     age: 22,
//     gender: "male"
// }

// console.log(person);

// /* to get a property of an object, we can dot (.) or (['']) to get the property*/
// console.log(person.name);
// console.log(person['name']);

// /* we can use (['']) for like taking user input and then get the property */

// let input = 'name';
// console.log(person[input]);

// /* Complex object means like a object/array inside an object*/

// let person2 = {
//     name: "yogi",
//     age: 22,
//     gender: "male",
//     laptop: {
//         brand: "Lenovo",
//         cpu: "i5",
//         ram: 16
//     }
// }

// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.gender);
// console.log(person2.laptop);

// /* What if i want to print the brand of the laptop ? */
// console.log(person2.laptop.brand);
// /* now what if i want to check if the ram property is available or not ? 
// and if the ram is available, then i want to print the length of it
// or if the property is not avaliable it will print undefined
// for that we can use (?) question mark and any method*/
// console.log(person2.laptop.brand?.length);
// /* Now how to delete an property from an object, we can use the delete keyword like this*/
// delete person2.age;
// console.log(person2);

// delete person2.laptop;
// console.log(person2);

// delete person2;
// console.log(person2); // will say person2 is not defined

// /* Now if we want to loop through and print the values for each key, we can use a For in Loop */

// let person3 = {
//     name: "yogi",
//     age: 22,
//     gender: "male",
//     laptop: {
//         brand: "Lenovo",
//         cpu: "i5",
//         ram: 16
//     }
// }

// for (let key in person3) {
//     console.log(key, person3[key]);
// }
// for (let key in person3.laptop) {
//     console.log(key, person3.laptop[key]);
// }

// /* Functions, used to execute a certain block of code, many times as we want, basically wrapping up the code into a single unit and we can call it when we want ofc */
// function greet() {
//     console.log("Hey");
// }

// greet();

// /* Okay now if we want to get data from a function and then store it in a variable or use it later
// and not just printing it in the function?
// we can use return keyword, which returns the data by the function
// like a function gives us a value after we run/call it*/

// function a() {
//     return "Hello World";
// }

// let string = a();
// console.log(string);

// /* so now if we want to pass a value to a function and want to use it in the function?
// we can pass the values by putting them in the brackets like */
// function b(name) {
//     console.log(name);
// }

// let name = 'yogi';
// b(name);

// /* Expresions, these are first evaluve and then assign to a valiable*/
// /* expression is anything that produces a value */
// // let a = 5 + 6; // this is an expression

// /* Now as we saw expression, we can also make a function expression, meaning assiging a function to a variable */
// /* the function without a name is called anonymous function*/
// /* So we take the annoymous function and assiging it to a variable, making it an expression */
// /* function does not need to return a value to be a valid expression */
// let z = function () {
//     console.log("Hi1");
//     return "hi2"
// }

// /* Here the returned hey will be stored in z, when we call do like this z()*/
// console.log(z());
// /* but if we log it out as a variable z, it will show that z is an function expression/function */
// console.log(z);

// /* Now in real world, a laptop can do some function right? like displaying something, etc
// so in virtual world we use object to repesent a real world thing right ?
// and just like a real world object, it also has some functions right ?
// so we can define a function inside an object*/

// let laptop = {
//     brand: "Asus",
//     processor: "Intel",
//     ram: 16,

//     greet: function () {
//         console.log("Hello");
//     },

//     process: function () {
//         console.log("Processing");
//     }
// }

// laptop.greet();

// /* Function Exprssions vs declaration: 
// function declaration = define a reusable block of code that performs a specifc task.*/

// function hello() {
//     console.log("Hello");
// }

// /*function expression = a way to define a function as values or variables.*/

// const hey = function () {
//     console.log("Hello World");
// }

// /* and to invoke/ call it we use*/
// hey();

// /* using JS we also have the ability to pass a function as a value, for this example we will use*/
// setTimeout(hey, 3000);

// /* Now instead of doing like this, we will write whole function as an argument, 
// in JS its ligal to pass an entire function as an argument */

// setTimeout(function () {
//     console.log("hello world");

// }, 3000);

// /* 
// Arrow Functions: a concise way to write function expressions,
// good for simple functions that you use only once,
// no need of function declaration

// (parameters) => some code
// */

// /* Example 1: */
// const hello = (name, age) => {console.log(`Hello ${name}`)
//                               console.log(`You are ${age} years old`)};

// hello("Bro", 25);

// /* Example 2: */
// setTimeout(() => {console.log("Hello"); 
//                   console.log("Goodbye");}, 3000);

// const hello = (name, age) => {
//     console.log(`Hello ${name}, You are ${age} years old`);
// }

// /* This keyword to get the current object's property, we can use this keyword or instead we can use the object and the property name but that would get confused if we have many objects etc*/
// let phone = {
//     brand: "Apple",
//     model: "IPhone",
//     cpu: "A series Processor",
//     ram: "8GB",

//     getConfig: function () {
//         console.log(this.model);
//     }
// }

// phone.getConfig();

// /* Constructor Function, its another way to create an object like we do in Java */
// function Watch(brand, price) {
//     this.brand = brand;
//     this.price = price;

//     /* this is how you write a function in an constructor function object */
//     this.work = function () {
//         console.log("This watch is working");
//     }

//     /* we can use return but if it doesnt returns an object, it will skip it */
// }

// let w1 = new Watch("Apple", 30000.00);
// let w2 = new Watch("Samsung", 10000.00);

// console.log(w1);
// console.log(w2);

// w1.work();

// /* Arrays in JS, in JS arrays can hold multiple types of data as elements 
// Array constructor and without constructor 
// */
// const numbers = new Array(1,3,5,7);

// let sampleArray = []; // Empty array
// let sampleArray2 = [1, 2, 3] // Non empty array

// /* Array methods*/
// let data = [5, 6, 7, 8, 9];
// let data2 = [4, 3, 2, 1, 0, 1, 2];
// let newArray = data.concat(data2); // concats 2 or more arrays
// console.log(newArray);

// data.push(10); // appends element/elements to the end of array
// data.pop(); // removes the last element
// data.shift(); // shifts all the values to left, meaning removes the first values
// data.unshift(7); // add an element to the start
// data.splice(1, 1); // if you want to remove an element in between of an array, the first value is the index and the second is like how many values you want to remove from that index value
// let slicedArr = data.slice(1, 3); // slices out a price from an array, it creates a new array
// delete data[0] // this operator deletes the element and the array's length wont be changed ?
// data2.sort(); // sorts alphabatically and modifies the original array

// let compare1 = (a, b) => {
//     return a - b // assending
// }
// let compare2 = (a, b) => {
//     return b - a // decending
// }

// data2.sort(compare2); // to sort acending or decending order
// console.log(data2);

// data2.reverse();

// console.log(slicedArr);

// /* Loops for Arrays */
// /* For in loop, it will fetch the key of the element/property and with that key, you can fetch the value, can be used in Array and object*/

// for (let key in data) {
//     console.log("index value " + key); // fetches the keys
//     console.log("index value " + key + " has value " + data[key]); // here fetches the key and with that key, gets the value
// }

// /* For of loop, takes a temp variable and assigns each element to that variable so we can perform operations on it */
// for (let n of data) {
//     console.log(n);
// }

// /* Spread operator */
// let a1 = [1, 2, 3]
// let a2 = [4, 5, 6]
// let a3 = [...a1, ...a2];

// console.log(a3);

// /* Array destructing */
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let [p, k, ...l] = nums;

// console.log(p); // the first element assigned to p element
// console.log(k); // the second element assigned to k element/variable
// console.log(l); // the (...) operator means the rest of the array assigned to one element as an array i guess you can say.


// /* ForEach method of array, takes a functon as a parameter */
// nums.forEach((ele) => {
//     console.log(ele);
// });

// // also it can take 3 parameters, 1 is the temp value, 2 is the index and 3 is the array itself
// nums.forEach((i, index, array) => {
//     console.log(i, index, array);
// });

// let Array1 = [1, 2, 3, 4, 5, 6, 7];
// let searchNum = 7;

// let filteredArray = Array1.filter((i) => {
//     return i % 2 === 0;
// }).map((n) => {
//     return n * 2;
// }).reduce((n, m) => {
//     return n + m;
// });

// console.log(filteredArray);

// /* Set in JS, collection of values which are unique values unlike arrays, set doesnt have a index value */
// let n = new Set();
// n.add(3);
// n.add(4);
// n.add(3);
// n.add("Yogi");
// n.add("Naveen");
// n.add("Vignesh");

// n.forEach((v) => {
//     console.log(v);
// });

// for (let v of n) {
//     console.log(v);
// }

// for (let v in n) {
//     console.log(v);
// }

// /* Map in JS, its a key value pair and we will set values, meaning if we have two same key and different values, instead of adding new key, value pair it will just update/set the new value to the old key */
// let person1Map = new Map();
// person1Map.set("name", "Yogi");
// person1Map.set("Age", 22);
// person1Map.set("name", "vignesh");

// for (let [k, v] in person1Map) {
//     console.log(k, " : ", v);
// }

// /* Looping through Arrays, we can use classical for loop, forEach  */
// let num = [3, 5, 1, 2, 4]

// // classical for loop
// for (let i = 0; i < num.length; i++) {
//     console.log(i, num[i]);
// }

// // for of, is like a shortcut to the classical for loop
// for (let i of num) {
//     console.log(i);
// }

// // for in, fetches the keys/index of object/array
// for (let key in num) {
//     console.log(key); // to get the keys
//     console.log(num[key]); // to gets the values with the keys
// }

// // ForEach loop, used when we want to perform some operation on each element of an array
// num.forEach((element) => {
//     console.log(element * 2);
// })

// // Array.from, changes to array from any other object, like HTML collection, String etc
// let name = "Yogendra";
// let nameArray = Array.from(name);
// console.log(nameArray);

// // Higher Order Array Methods
// // map(), creates an new array, by performing some operations on each element

// // we can use additional parameters to get index and the array itself in foreach and map
// let arr = [45, 23, 21];
// let a = arr.map((value, index, arr) => {
//     console.log(value, index, arr);
//     return value + 1; // makes the new array with these returned values, meaning a is a new array
// });

// console.log(a);

// // Array filter method, creates a new array with the values for which the filter function returns true, doesnt modify the OG array
// let arr2 = [40, 45, 60, 70, 0, 7, 3];
// let a2 = arr2.filter((value) => {
//     return value < 10;
// });

// console.log(a2);

// // Reduce method, basically it takes the first and second value and runs the function on it, and runs the function on the result and next value.
// // it reduces the array to a single value
// let arr3 = [1, 2, 3, 4, 5, 6];
// let newArray3 = arr3.reduce((value, value2) => {
//     return value + value2;
// });

// // console.log(newArray3);


// /* Trying Without Arrow functions to understand */

// /* Filter method with f1 as parameter*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const f1 = function (a) {
//     if (a % 2 === 0 && a > 5) {
//         return a;
//     }
//     // return a % 2 === 0;
// }

// let evenNumbers = arr.filter(f1);

// console.log(evenNumbers);

// /* Map method with f2 as parameter*/
// const f2 = function (a) {
//     return a * 2;
// }

// let mappedResult = arr.map(f2);

// console.log(mappedResult);

// /* Using reduce with f3 as an parameter */
// const f3 = function (a, b) {
//     return a + b;
// }

// let reducedResult = arr.reduce(f3);
// console.log(reducedResult);

// /* Using Filter, Map and reduce together, with array functions */
// let fm = arr.filter((e) => {
//     return e % 2 === 0
// }).map((e) => {
//     return e * 2
// }).reduce((e, f) => {
//     return e + f
// });

// console.log(fm);

// /*
// FOR HIGHER ORDER ARRAY METHODS LIKE forEach, map, filter and reduce, WILL PROVIDE THE element, index and array ARGUMENTS TO CALLBACK FUNCRION.

// .forEach() is a method used to iterate over the elements of an array
// and apply a specified function to each element, modifies the array

// array.forEach(callback)
// element, index and array parameters are provided automatically with forEach method,

// behind the scenes the foreach method will provide to a callback, an element, index and array argument,
// an element for the current element that we are on when looping through the array
// an index that keeps track of the current index number
// and the location of the array itself
// */

// /* Example 1: */
// let numbers = [1,2,3,4,5,6,7];

// numbers.forEach(cube);
// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }

// /* Example 2: */

// let fruits = ["apple", "orange", "grapes", "banana"];

// fruits.forEach(capitalize);
// fruits.forEach(display); // here the parameter for the display function, meaning the fruit element will be passed automatically

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase(); // methods belong to somthing, like here the method belong to the element and functions are standalone
// }

// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1); // this is method chaining
// }

// function display(element) {
//     console.log(element);
// }

// /*
// .map(), accepts a callback and applies that function to each element of the array,
// then returns a new array other than that its very similar to forEach
// element, index and array parameters are provided automatically with map method,
// here we will use function expression for clarity
// */

// /* Example 1: */

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// /* Example for function expression here */
// const cubes = numbers.map(function (element) {
//     return Math.pow(element, 3)
// }
// );

// console.log(squares);
// console.log(cubes);

// function square(element) {
//     return Math.pow(element, 2)
// }


// /* Example 2: */
// const Students = ["SpongeBob", "Patrick", "Sandy", "Squidward", "MrKrabs"];

// const StudentUpperCased = Students.map(upperCase);
// const StudentLowerCased = Students.map(lowerCase);

// console.log(StudentUpperCased);
// console.log(StudentLowerCased);


// function upperCase(element){
//     return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
// }

// /* Example 3: */
// const dates = ["2024-12-30", "2025-12-29", "2026-12-28", "2027-12-27"];

// const formatedDates = dates.map(formateDates);
// console.log(formatedDates);

// function formateDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// /* Filter, creates a new array by filtering out the elements */

// /* Example 1: */
// let numbers = [1,2,3,4,5,6,7,8,9];

// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);


// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// /* Example 2: */
// let ages = [16, 17, 18, 18, 19, 20, 60];

// let adults = ages.filter(isAdult);
// let children = ages.filter(isChild);

// console.log(adults);
// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

// /* Example 3: */
// const words = ["apple", "orange", "banana", "kiwi", "papaya", "coconut"];

// let shortWords = words.filter(getShortWords);
// let longWords = words.filter(getLongWords);

// console.log(shortWords);
// console.log(longWords);

// function getShortWords(element){
//     return element.length <= 6;
// }

// function getLongWords(element){
//     return element.length >= 6;
// }

// /* .reduce(), reduces the elements of an array into an single value */

// /* Example 1: */
// const prices = [5, 30, 10, 30, 50, 37, 70];

// const total = prices.reduce(sum);

// console.log(total);

// /* Accumulator means like the first element, meaning to that element, every other elements get added to, this can be a little confusing so we can do simpler way*/
// // function sum(accumulator, element){
// //     return accumulator + element;
// // }

// /* Instead of accumulator etc, we gonna just use previous and next parameters */
// function sum(previous, next){
//     return previous + next;
// }

// /* Meaning during the 1st iteration, the previous would be 0 and next would be 5
// and the result would be the previous and the next element would be 30 */

// /* Example 2: */
// const grades = [75, 50, 90, 80, 65, 95];

// const max = grades.reduce(getMax);
// const min = grades.reduce(getMin);

// console.log(max);
// console.log(min);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }

/* All the Higher Array methods with arrow functions to understand more clearly */
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(numbers);
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

/* 
Method chaining:
Calling one method after another in one line of code,
it helps in avoiding named variable, but the method chain is too long, it becomes difficult to read.
*/

let username = window.prompt("Enter your username");

/* No method chaining */

// username = username.trim();

// let firstLetter = username.charAt(0);

// firstLetter = firstLetter.toUpperCase();

// let otherChars = username.slice(1);

// otherChars = otherChars.toLowerCase();

// username = firstLetter + otherChars;

// console.log(username);

/* With Method Chaining */

username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();

alert(username);