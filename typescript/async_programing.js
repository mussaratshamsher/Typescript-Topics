"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// synchorous programming: program that runs top to bottom or line by line
let welcome = "Welcome in programming";
console.log('Welcome');
//Asynchorous programming:
//asynchronous programming is essential for creating responsive and efficient applications.
//code does not run line by line
console.log(1);
console.log(2);
setTimeout(function () {
    console.log("Asynchronous Program");
}, 1000);
console.log(4);
console.log(5);
//if value of variable is updated after setTimeout then result after time delay 'll be updated
let a = "old";
let b = "old2";
setTimeout(function () {
    console.log(a);
}, 2000);
console.log(b);
a = "Updated value";
//if setTime is zero or minor then without cosidering that synchronous program runs first then runs asynchronous
//This is because any function given to the setTimeout function will be executed asynchronously, when the main thread is not busy anymore.
console.log("name1");
console.log("name2");
setTimeout(function () {
    console.log(3);
}, 500);
for (let i = 1; i <= 5; i++) {
    console.log(`inside of log ${i}`);
}
;
//if time is zero in async program, then it also runs at the last
console.log("myName");
console.log("myage");
setTimeout(function () {
    console.log("myEducation");
}, 0);
console.log("mySkills");
//Asynchronous code using setInterval:
//setInterval has the same behavior as setTimeout but the code is executed multiple times. 
//You have to call clearInterval to kill the timer.
let counter = 0;
let timer = setInterval(function () {
    console.log('I am an asynchronous message');
    counter += 1;
    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);
console.log('I am a synchronous message');
