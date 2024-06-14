"use strict";
//Function CallBack: A callback function is a function that is called inside another function 
//after being passed as an argument.
// They allow to pass function as an argument to aother function.
//A callback function is a function that is passed as an argument to another function and is invoked 
//when a particular event or task is completed.
// This allows for asynchronous operations to be handled in a non-blocking manner.
Object.defineProperty(exports, "__esModule", { value: true });
function callback() {
    console.log("this is callback");
}
function runCallback(cb) {
    cb();
}
runCallback(callback);
function doingSome() {
}
