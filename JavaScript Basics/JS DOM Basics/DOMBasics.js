// //window object is the parent object of the browser
console.log(window);

// // Single element selectors
const form = document.getElementById('my-form');
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// // Multiple element selectors
console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// Looping through items
const items = document.querySelectorAll('.item');

items.forEach((item) =>{
    console.log(item.innerHTML);
});

// Manupilating the DOM
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
    document.querySelector('items').lastElementChild.innerHTML = '<h1>Hello</h1>';
}

btn.addEventListener('click', a);