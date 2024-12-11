// String, numbers, boolean, null, undefined

const name = 'John';
const age = 22;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and i am ${age}`);

// String propeties and methods
const s = 'Hello World, Code';

console.log(s.length);
console.log(s.toLocaleUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toLocaleLowerCase());
console.log(s.split(''));
console.log(s.split(' '));
console.log(s.split(', '));

// Arrays, in js we can store multiple types of data in an array
// Array constructor
const numbers = new Array(1,3,5,7);

// Array without any constructor
const fruits = ['Apple', 'Orange'];
console.log(fruits[0]);

fruits.push('Grapes');
console.log(fruits);

fruits.unshift('Appleeee');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits)); // to check if something is an array or not

console.log(fruits.indexOf('Apple'));

// Object Literals, basically like key, value pairs
const person = {
    firstName: 'Yogi',
    lastName: 'Ambati',
    age: 22,
    hobbies: ['Video games', 'Rubiks cube'],
    address: {
        street: 'Ram nagar',
        city: 'Vizag',
        state: 'AP'
    }
}

person.email = 'example@email.com';
console.log(person);

console.log(person.firstName, person.lastName, person.age);
console.log(person.hobbies[0]);
console.log(person.address.city);

const {firstName, address: {city}} = person;
console.log(firstName);

// Array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        done: false
    },
    {
        id: 2,
        text: 'Do laundry',
        done: true
    },
    {
        id: 3,
        text: 'Go to college',
        done: true
    }
];

console.log(todos[1].text);

// For loop
for(let i = 0; i < 10; i++){
    console.log(`Number ${i}`);
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// While
let i = 0;
while(i <= 10){
    console.log(`While loop number ${i}`);
    i++;
}

// For of loop
for(let todo of todos){
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text)
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoDone = todos.filter(function(todo){
    return todo.done === true;
});

console.log(todoDone);

// Function chaining
const todoDone2 = todos.filter(function(todo){
    return todo.done === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoDone2);

// Conditions
const x = 7;
const y = 10;

if(x === 7 || y > 7){
    console.log('X is 7 or y is more than 7');
}

const a = 10;

const color = a > 10 ? 'red' : 'blue';

console.log(color);

switch(color){
    case 'red':
        console.log('red');
    break;
    
    case 'blue':
        console.log("Blue");
    break;

    default:
        console.log('Color is not red or blue');
    break;
}

// Functions
function addNums(num1 = 7, num2 = 7){ // these are like default values that we can assign
    console.log(num1 + num2);
}

addNums(5, 5); // and if pass in the values, these override the default values

// Mostly we will return the values, not console out so we can use return keyword

function addNums2(num1 = 7, num2 = 7){
    return num1 + num2;
}

const result = addNums2(5, 5);
console.log(result);