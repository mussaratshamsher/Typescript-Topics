

/*json object
///JSON ( Javascript Object Notation )
// JSON stands for Javascript Object Notation.

// JSON is a text-based data format that is used to store and transfer data.

// JSON syntax

{

 "name": "Vipin",

 "age": 21,

 "gender": "male",
}

//  Is JSON is similar to javaScript objects?

// The Answer is No.

// JavaScript objects can contain functions but JSON not.
// JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties.
// The key and values are written in double quotes & are separated by ' : '.
// Example :
// JSON data
"name": "Vipin",

JSON Object
The JSON object is written inside curly braces { }.
JSON objects can contain multiple key/value pairs.

Example :

 // JSON object

 { "name": "Vipin", "age": 21 }
// JSON Array
// JSON array is written inside square brackets [ ].

// Example :

 // JSON array

 [ "Vipin", "Ankit", "Raj"]
 
//  Accessing JSON Data
// We can access JSON data using the dot notation.

/Example :

 // JSON object

 const detail = { "name": "Vipin", "age": 21 }

 // accessing JSON object

 console.log(detail. name); // Vipin
//We can also use square bracket syntax [] to access JSON data.

//Example :

  JSON object

 const detail = {

     "name": "Vipin",

     "age": 21
 }
// accessing JSON object

console.log(detail["age"]); //vipin

// Use of JSON
// JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
// JSON data are very easy to parse and use.
// JSON is language independent(We can create and use JSON in other programming languages too).

// Examples of JSON
// package.json
// tsconfig.json */

//methods of JSON
//JSON.parse()	This method takes a JSON string and transforms it into a JavaScript object.
//It is useful when dealing with data receive as JSON from a web server or API.

const jsonString = `{"name": "Ali", "age":"20", "city": "karachi"}`; //json string
const javaObj = JSON.parse(jsonString);
console.log(javaObj);
console.log(typeof jsonString);//logs string


//JSON.stringify()	This method converts a JavaScript value (JSON object) to a JSON string representation.

let myObj = {  //javascript object
    key: "value",
    property: "method",
}
let json_String = JSON.stringify(myObj);
console.log(json_String);
console.log(typeof myObj);//logs object
