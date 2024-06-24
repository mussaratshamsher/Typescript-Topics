//LOOPS
//Loops are used for iterating objects
//Loops are of 2 types:
//Definite Loop: if the number of iteration is known.i.e.for loop
//indefinite Loop: when the number of iteration is not known,loops are called indefinite loops.i.e.while & do-while loops
//Loops minimizez the code writig. very readable & easy to use
//Basic: for loop  //introduced by ES6
let a = 5;
//syntax
//for (initiliazation; conditon; increment/decrement){statement}
for (let a = 1; a <= 5; a++) {
    console.log(a);
}
;
//Q3: print numbers using for loop,the number/3,print "fizz",
//number/5 print "buzz", number/3 &/5 both,print "FizzBuzz".
console.log('\n Assignment3');
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0)
            output += "Fizz";
        if (i % 5 === 0)
            output += "Buzz";
        if (i % 3 === 0 && i % 5 === 0)
            output += "FizzBuzz";
        console.log(output || i);
    }
}
;
fizzBuzz();
//for of loop // for of & for in loop are only used for array
//Syntax:
// for ( let variable of array/object) {log variable}
let names = ['Ali', 'Zain', 'Ramsha', 'Hana'];
for (let name of names) { //logs Array Element
    console.log("\n Elements ofLoop", name);
}
//Q1: write a function that  loop through an array of fav movies using For-Of
let movieArray = ['movie1', 'movie2', 'movie3'];
function arrayLoop() {
    for (let movies of movieArray) {
        console.log('\n Assignment1', movies);
    }
}
arrayLoop();
//for in loop
//Syntax:
//for (let variable in variable){ log variable}
let favMovies = ["Movie1", "Movie2", "movie3"];
for (let movies in favMovies) {
    console.log("\n index InLoop: ", movies);
} //logs index 
for (let movies in favMovies) {
    console.log("\n Elements InLoop: ", favMovies[movies]); //logs elements
}
;
//Q: function that prints car properties; make,model & year
console.log('\n Assignment2');
let car = {
    make: 'Yamaha', model: 'camry', year: '2020'
};
function propertyCar(car) {
    for (let key in car) {
        console.log(` ${key}: ${car[key]}`);
    }
}
;
propertyCar(car);
//While loop: Runs the code if condition is true & if condition is wrong, it'll exit from loop
//syntax: initial expression
// while(condition){statement}
console.log('\n while loop');
let j = 0;
while (j < names.length) {
    console.log(names[j]);
    j++;
}
//do While Loop
//The do.. while loop runs the block of code at least once before checking for the specified condition.
// For the rest of the iterations, it runs the block of code only if the specified condition is met. 
//sytax: initial expression
// do (condition) while {statement}
console.log('\n do while');
let k = 0;
do {
    console.log(names[k]);
    k++;
} while (k < names.length);
//break & continue Statements
//break: used to exit the program/loop:
let i = 1;
//break statement: causes the program to exit the loop
for (let j = 1; j <= 10; j++) {
    if (i == 5) {
        break;
    }
}
console.log(j);
//cotinue Statement: terminates/skips the particular iteration & continues subsequent
for (let a = 1; a <= 7; a++) {
    if (i == 5) {
        continue;
    }
}
console.log(a);
export {};
