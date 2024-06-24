//Function CallBack: A callback function is a function that is called inside another function 
//after being passed as an argument.
// They allow to pass function as an argument to aother function.
//A callback function is a function that is passed as an argument to another function and is invoked 
//when a particular event or task is completed.
// This allows for asynchronous operations to be handled in a non-blocking manner.
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
//Example 2
function twoparam(callback, newName) {
    callback(newName);
}
let arrowFnc = (name) => {
    console.log(`Welcome ${name}`);
};
twoparam(arrowFnc, "Fareeha");
//Example 3: Guess out put of the given code
function cookPulao(calback) {
    console.log("Pulao is preparing");
    setTimeout(() => {
        console.log("Pulao is ready");
        calback();
    }, 3000);
}
;
function packBags_1(callback) {
    console.log("Cold Drink, Chips, Nimko");
    setTimeout(() => {
        console.log("Bags are Packed");
    }, 1500);
}
//cookPulao(packBags_1) //gives syntax error with no result
//Example 4
// // Making Tea
// // Add Water
// // After 5 seconds Tea Leaves
// // after 10 seconds add milk
// // After 2 seconds Sugar
// // after 3 seconds tea is ready
console.log('Add Water'); //1
setTimeout(() => {
    console.log('Add Tea Leaves');
}, 5000); //2
setTimeout(() => {
    console.log('Add Milk');
}, 10000); //2
setTimeout(() => {
    console.log('Add Sugar');
}, 2000); //2
setTimeout(() => {
    console.log('Tea is Ready');
}, 3000); //2    
//given statements prints out according to time order so the sequence of Tea making steps disturbs.To avoid such problems Callback hell were introduced
//Callback Hell: Callback hell is a term used to describe the situation where multiple asynchronous operations are nested within each other.
//Pyramid of DOM: the "pyramid of doom" refers to a situation where multiple asynchronous operations are nested within each other, resulting in deeply indented and difficult-to-read code.  
function prepareTea(taskName, delay, cb) {
    setTimeout(() => {
        console.log(taskName);
        cb();
    }, delay);
}
prepareTea("add water", 0, () => {
    prepareTea("add tea Leaves", 5000, () => {
        prepareTea("Add Milk", 0, () => {
            prepareTea("Add sugar", 0, () => {
                prepareTea("Tea is Ready", 0, () => {
                    console.log("Tea is Fantastic!");
                });
            });
        });
    });
});
export {};
