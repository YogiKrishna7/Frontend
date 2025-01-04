/* Fetch Api:
The fetch API provides an interface for fetching (sending/receiving) resources.

it uses request and respond objects internally

to use fetch api, we need to use fetch method, is used to fetch a resource(data)

so when we use fetch(), it returns a promise

let promise = fetch(url, [options]);

if we dont pass any options, then the fetch api will use a type of request called GET request

GET is used to get data from an api

*/

// const url = "https://goweather.herokuapp.com/weather/visakhapatnam";

// let promise = async () =>  {
//     console.log("Getting data...");

//     const response = await fetch(url);

//     console.log(response);
// }

/* 
here we are getting not the data that we are need right, its because the data is in other format.
AJAX is Asynchronous JS & XML,

now in early days, if we want to receive any data, that data would be in XML format
but now a days we dont use XML for this, now a days we use JSON format,
and as data format changes, the ways to read/parse that data is also changed.
but the data is same in both formats but the sturcture is bit different.

JSON means JavaScript Object Notation.
meaning the data would look like JavaScript object.
so for people who knows JS Objects, it would be more easy to understand than other format like XML.
otherwise, we have to learn XML separatly.
So now a days, mostly apis that we use are in JSON format.

So we can also call AJAJ, meaning Asynchronous JS & JSON, but its not a very populor term,
so still gonna use the term AJAX even though XML is replaced with JSON.

so in the above code the response is in JSON format,
so to get the actual data, we need to convert the JSON to JS object to use in JS.

And for that we use json() method, and the method is also an Asynchronous method,
so it returns a second promise that resolves with the result of parseing the response body as JSON.

meaning when we give the json method the respond/result of first promise, it will return a JS object, which is a useable data format in JS.

fetch returns 1st promise and json method will return second promise.

*/

// const Api_key = "c45a857c193f6302f2b5061c3b85e743"
// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;

// let promise = async () => {
//     console.log("Getting data...");

//     const response = await fetch(url);

//     const ObjectData = await response.json(); // we are using await keyword because its also a promise

//     console.log(ObjectData); // this data is JS object/ usable data.
// }

// promise();



/* Example with whatever we learnt from Asynchronous JS, with movies api */
Api_key = "c45a857c193f6302f2b5061c3b85e743"
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;

(async () => {
    console.log("Getting data...");

    const response = await fetch(url);

    const ObjectData = await response.json();

    console.log(ObjectData);

    // code to display on the DOM
    let mdiv = document.body;

    ObjectData.results.forEach(element => {

        let titleElement = document.createElement("div");

        titleElement.textContent = element.title;

        mdiv.appendChild(titleElement);
    });
})();