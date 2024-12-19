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

// if(num1 % 2 == 0){
//     console.log(`${num1} is even`);

// }else if(num2 % 2 == 0){
//     console.log(`${num2} is even`);

// }
// else if(num3 % 2 == 0){
//     console.log(`${num3} is even`);
// }

// /* ternary operator (?:) */
// // let i = 10;
// // let res;

// // res = i%2===0 ? "even" : "odd"
// // console.log(res);

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
// for(i = 1; i<=5; i++){
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

// while(num > 0){
//     lastDigit = num % 10;
//     num2 = num2 * 10 + lastDigit;
//     num = parseInt(num / 10);

//     num2 + num;
// }

// console.log(num2);

/* Object represents a real world thing in the virtual world, like in real world if we have a laptop, it will have some info/properties for it */

let person = {
    name: "yogi",
    age: 22,
    gender: "male"
}

console.log(person);

/* to get a property of an object, we can dot (.) or (['']) to get the property*/
console.log(person.name);
console.log(person['name']);

/* we can use (['']) for like taking user input and then get the property */

let input = 'name';
console.log(person[input]);

/* Complex object means like a object/array inside an object*/

let person2 = {
    name: "yogi",
    age: 22,
    gender: "male",
    laptop : {
        brand : "Lenovo",
        cpu : "i5",
        ram : 16
    }
}

console.log(person2.name);
console.log(person2.age);
console.log(person2.gender);
console.log(person2.laptop);

/* What if i want to print the brand of the laptop ? */
console.log(person2.laptop.brand);
/* now what if i want to check if the ram property is available or not ? 
and if the ram is available, then i want to print the length of it
or if the property is not avaliable it will print undefined
for that we can use (?) question mark and any method*/
console.log(person2.laptop.brand?.length);
/* Now how to delete an property from an object, we can use the delete keyword like this*/
delete person2.age;
console.log(person2);

delete person2.laptop;
console.log(person2);

delete person2;
console.log(person2); // will say person2 is not defined

/* Now if we want to loop through and print the values for each key, we can use a For in Loop */

let person3 = {
    name: "yogi",
    age: 22,
    gender: "male",
    laptop : {
        brand : "Lenovo",
        cpu : "i5",
        ram : 16
    }
}

for(let key in person3){
    console.log(key, person3[key]);
}
for(let key in person3.laptop){
    console.log(key, person3.laptop[key]);
}

/* Functions, used to execute a certain block of code, many times as we want, basically wrapping up the code into a single unit and we can call it when we want ofc */
function greet(){
    console.log("Hey");
}

greet();

/* Okay now if we want to get data from a function and then store it in a variable or use it later
and not just printing it in the function?
we can use return keyword, which returns the data by the function
like a function gives us a value after we run/call it*/

function a(){
    return "Hello World";
}

let string = a();
console.log(string);

/* so now if we want to pass a value to a function and want to use it in the function?
we can pass the values by putting them in the brackets like */
function b(name){
    console.log(name);
}

let name = 'yogi';
b(name);

/* Expresions, these are first evaluve and then assign to a valiable*/
/* expression is anything that produces a value */
// let a = 5 + 6; // this is an expression

/* Now as we saw expression, we can also make a function expression, meaning assiging a function to a variable */
/* the function without a name is called anonymous function*/
/* So we take the annoymous function and assiging it to a variable, making it an expression */
/* function does not need to return a value to be a valid expression */
let z = function(){
    console.log("Hi1");
    return "hi2"
}

/* Here the returned hey will be stored in z, when we call do like this z()*/
console.log(z());
/* but if we log it out as a variable z, it will show that z is an function expression/function */
console.log(z);

/* Now in real world, a laptop can do some function right? like displaying something, etc
so in virtual world we use object to repesent a real world thing right ?
and just like a real world object, it also has some functions right ?
so we can define a function inside an object*/

let laptop = {
    brand : "Asus",
    processor : "Intel",
    ram : 16,

    greet : function(){
        console.log("Hello");
    },
    
    process : function(){
        console.log("Processing");
    }
}

laptop.greet();

/* Arrow Functions */
let y = () => 2 + 2; 