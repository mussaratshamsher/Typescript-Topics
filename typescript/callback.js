"use strict";
//Function CallBack: A callback function is a function that is called inside another function 
//after being passed as an argument.
// They allow to pass function as an argument to aother function.
//A callback function is a function that is passed as an argument to another function and is invoked 
//when a particular event or task is completed.
// This allows for asynchronous operations to be handled in a non-blocking manner.
Object.defineProperty(exports, "__esModule", { value: true });
//simple callback function
function callback(a) {
    console.log("This is callback");
}
function runCallback() {
    console.log(" My first callback"); //
}
callback(runCallback); // calling function as an argument
//
function hello(callback) {
    callback("Saim");
}
let arrowFunc = (name) => {
    console.log(`Hello! ${name}`);
};
hello(arrowFunc);
function twoparam(callback, newName) {
    callback(newName);
}
let arrowFnc = (name) => {
    console.log(`Welcome ${name}`);
};
twoparam(arrowFnc, "Fareeha");
