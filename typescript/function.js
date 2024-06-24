//types of function
//1. function without parameter
function colourName() {
    console.log("black");
}
colourName();
//return in function
function colorName() {
    return "pink"; //when use return data return type is necessary
}
colorName(); // no result due to return
let color = colorName(); //method 1 to log
console.log(color);
console.log(colorName()); //method 2
//2. Arrow function //define function using a variable & => is used
let arrowFunc = () => {
    console.log("typescript");
};
arrowFunc(); // log to output
// return in arrow function
let arrowFnc = () => {
    return 4 + 5;
};
console.log(arrowFnc());
// fuction that passes single argument
let arrowFnct = (lang) => {
    console.log(lang);
    //return lang
};
arrowFnct("Python");
// in case of return: console.log(arrowFnct("Python"));
//3.Anonymous Function
//it represents a function without a specific name.
let myAdd = function (x, y) {
    return x + y;
};
//4. Recursive function
// A function that calls itself within its own body
function countDown(number) {
    if (number <= 0) {
        console.log("Time over!");
        return;
    }
    console.log(number);
    countDown(number - 1);
}
console.log("timer");
countDown(5);
//5. Async Function
//a function that can be paused & resumed later.marked with keyword async
//inside it we can use "await" to pause execution
// 6. Nested function: function with in function
// Nested Function we can simmply call  different or make function init
function outerFnc() {
    const innerFunc = function () {
        console.log("Hello World");
    };
    innerFunc();
}
outerFnc();
//7. immediately invoked function//can be call immediately after writing funtion
(function () {
    console.log("Runs immediately");
})();
//8. Function callbacks
// they allow to pass functions as arguments to other functions
function userInput(callback) {
    let name = "Sir Ameen Alam";
    callback(name);
}
userInput(function (name) {
    console.log("Asslam-o-alaikum! " + name);
});
// set timeOut order
//schedule a task using timer
setTimeout(() => {
    console.log("I am ready to go!");
}, 20000); //waits 2min to print message
export {};
