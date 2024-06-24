//Type casting & Narrowing   
//type Casting
//Type casting is essential for performing various operations, 
//including arithmetic calculations, and data, manipulation, and compatibility checks
//Type casting can happen in one of two ways: 
//implicit, which is when TypeScript handles the operation, 
//or explicit, when the developer handles the conversion.
//Explicit casting:
//explicit casting is the process of explicitly converting a value from one data type to another.
//This is done using the "as" keyword or by using type assertion.
//Explicit casting should be used carefully, as it can lead to runtime errors if the conversion is not valid. 
let myname = "Rabia";
console.log(myname.length);
console.log(myname.length);
let myphone = "039946";
console.log(myphone.concat);
//Implicit Casting
//implicit casting(or automatic type conversion or type coercion) is the process of
//automatically converting a value from one data type to another without the need for explicit syntax.
//Implicit casting can be useful as it allows for more convenient and intuitive coding.
//but also involve potential risk & surity of approprate specific use Case.
let num = 10;
let str = "Hello";
let result = num + str;
console.log(result); // Output: "10Hello"
//Narrowing
//Narrowing in TypeScript refers to the process of narrowing down the type of a variable or expression 
//it helps make code more robust by allowing precise typing based on runtime conditions.
//Narrowing is also useful when working with union types or discriminated unions.
let x;
x = "mussarat";
if (typeof x === 'string') {
    // Here, TypeScript narrows down the type of `x` to string
    console.log(x.toUpperCase());
}
else {
    // Here, TypeScript knows that if we're not in the string branch,
    // then `x` must be a number
    //console.log(x.toFixed(2));
    console.log('throws error');
}
function myName() {
    console.log("123");
}
console.log(typeof myName);
//Enum & const Enum
//Enum
//an enum is a way to define a set of named constants. 
//It allows developers to create a collection of related values
//Enums are useful for defining  working with a fixed set of values.i.e.days of the week,colors, or status codes. 
//They provide type safety and readability to the code 
//rather than using enum , const enum is preferred
//Enum value counts from zero like index value
//Syntax: enum vairable{constant object}
//log statement
var car;
(function (car) {
    car[car["Alto"] = 0] = "Alto";
    car[car["Mehran"] = 1] = "Mehran";
    car[car["Suzuki"] = 2] = "Suzuki";
    car[car["Cultus"] = 3] = "Cultus";
})(car || (car = {}));
console.log(car[1]); //giving index to log element 'Mehran'
console.log(car['Suzuki']); //accessing index using element
//Q: Enum for days of week. function that takes a day as an argument & returns "Weekend" if Saturday/Sunday & 
// "Weekday" for other days.
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 1] = "tuesday";
    days[days["wednesday"] = 2] = "wednesday";
    days[days["thursday"] = 3] = "thursday";
    days[days["friday"] = 4] = "friday";
    days[days["saturday"] = 5] = "saturday";
    days[days["sunday"] = 6] = "sunday";
})(days || (days = {}));
function enumDays(days) {
}
; //starts with 0
var c = 1 /* Color.Green */;
;
; //can assign values to all
var colorIndex = 4 /* Color2["Blue"] */;
console.log(colorIndex);
export {};
