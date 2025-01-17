// Getting html element with id, gives a single value
let roots = document.getElementById("root");

// Getting html elements with class name, gives a collection of elements, similar to array but not exactly array
let classElements = document.getElementsByClassName("heading");

// Getting html elements with tag names, gives us the collection of elements using the tag names
let tagElements = document.getElementsByTagName("h1");

// Using querySelector for same, getting by class and id names, etc
// returns a node list
// everything in the DOM tree is a node
// querySelector gives us the first element of the class/single element

// for class we will pass = .heading
// for id we will pass = #heading
// for tag we can pass directly = header

// for single element/ first element
let element = document.querySelector("div");

// multiple elements
let elements = document.querySelectorAll(".heading");

// properties, we can get the values, change, set them 
// tagName = returns tag for element nodes
console.log(element.tagName);
// innerText = returns the text content of the element and all its children
console.log(element.innerText);
// innerHTML = returns the plain text / HTML code for that element
console.log(element.innerHTML);
// textContent = returns textual content even for hidden elements, like the escape chars
document.querySelector(".list").textContent;
document.querySelector(".end").textContent;

// we can change the innerText like this
document.querySelector(".h").innerText = "Apple";

// To get the attribute and its value
console.log(document.querySelector("#box").getAttribute("id"));
console.log(document.querySelector("#box").getAttribute("name"));
console.log(document.querySelector("#box").getAttribute("class"));

// To set/change the attribute values
document.querySelector("#box").setAttribute("class", "A updated class");
console.log(document.querySelector("#box").getAttribute("class"));

// To create an element
let newBtn = document.createElement("button");
newBtn.innerText = "Submit";

// To add the button at the end of a node, we use append
// To add the button at the start of the node, we use prepend

// document.querySelector("#box").append(newBtn);
// document.querySelector("#box").prepend(newBtn);

// To add the button just before the node/here the div, we can use before
// document.querySelector("#box").before(newBtn);
// To add the button just after the node/here the div, we can use after 
document.querySelector("#box").after(newBtn);

// To delete the node, we can use .remove
document.querySelector("#boxnew").remove();

// window object is the parent object of the browser
console.log(window);

// Single element selectors
const form = document.getElementById('my-form');
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple element selectors
console.log(document.querySelectorAll('.item'));

// Looping through items
const items = document.querySelectorAll('.item');
items.forEach((item) => {
    console.log(item.innerHTML);
});

// Manipulating the DOM
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events
function a(e) {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    const name = document.querySelector('.name').value;
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}

btn.addEventListener('click', a);