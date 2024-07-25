//LOOPS

//Loops are used for iterating objects
//Loops are of 2 types:
//Definite Loop: if the number of iteration is known.i.e.for loop
//indefinite Loop: when the number of iteration is not known,loops are called indefinite loops.i.e.while & do-while loops
//Loops minimizez the code writig. very readable & easy to use

//Basic: for loop  //introduced by ES6

//syntax
//for (initiliazation; conditon; increment/decrement){statement}
let a = 5
for (let a =1; a<=5; a++) {
    console.log(a)
};
let sum = 0;
for (let i = 1; i<=5; i++){
   sum+= i;
}
console.log("Sum:", sum);

//Q3: Print numbers using for loop,the number/3,print "fizz",
//number/5 print "buzz", number/3 &/5 both,print "FizzBuzz".
console.log('\n Assignment3')
function fizzBuzz() {
for (let i=1; i<=100; i++){
  let output = '';
  if(i % 3===0) output += "Fizz";
  if(i % 5===0) output += "Buzz";
  if(i % 3=== 0 && i % 5 === 0) output += "FizzBuzz";
  console.log(output || i);
  }};
  fizzBuzz();
//for of loop : for of & for in loop are only used for array
//Syntax:
// for ( let variable of array/object) {log variable}
let names :string[]= ['Ali', 'Zain','Ramsha', 'Hana']
for (let name of names){ //logs Array Element
    console.log("\n Elements ofLoop", name)
} 
//Q1: write a function that  loop through an array of fav movies using For-Of
let movieArray = ['movie1', 'movie2', 'movie3'];

function arrayLoop() {
  for (let movies of movieArray){
  console.log('\n Assignment1', movies);
  }}
  arrayLoop();

  let arr:number[] = [1,2,3,4];
  for (let value of arr){
    console.log(value);
  };
  let friendsName:string[] = ["Ali", "Shan", "Mina"];
  for (let names of friendsName) {
    console.log(names);
  } 
//for in loop
//Syntax:
//for (let variable in variable){ log variable}
let favMovies = ["Movie1", "Movie2", "movie3"]
for (let movies in favMovies) {
    console.log("\n index InLoop: ", movies);} //logs index 

for (let movies in favMovies){
    console.log("\n Elements InLoop: " , favMovies[movies])//logs elements
};
//for in for objects
let object:any = {
  student1 : " Ali",
  student2 : " Bilal"
};
for (let key in object){
 console.log(key);
}
for (let key in object) {
  console.log(object[key]); //gives values
}
//Q: function that prints car properties; make,model & year
console.log('\n Assignment2');
let car= {
  make: 'Yamaha', model: 'camry', year:'2020'
};
function propertyCar (car: {[key:string]: string|number}){
  for (let key  in car){
    console.log(` ${key}: ${car[key]}`);
    }
};
propertyCar(car);

//For Each loop:
// Syntax: nameOfVariable.forEach(element) => {block of code}
let namesOfList = ['hina', 'saima', 'tia'];
namesOfList.forEach(names => {
  console.log(`asslam-O-alaikum! ${names} I want to go Murree with you..`)
})


//While loop: Runs the code if condition is true & if condition is wrong, it'll exit from loop
//syntax: initial expression
  // while(variable condition){statement}

  console.log('\n while loop')
  let j = 0;
  while(j < names.length){
    console.log(names[j]);
    j++
  }
let ab = 0;
while(ab<5) {
  console.log(ab);
  ab++
}
let l =1;
while (l <=10) {
  l*=2
}
console.log('multi', l);
//do While Loop
//The do.. while loop runs the block of code at least once before checking for the specified condition.
// For the rest of the iterations, it runs the block of code only if the specified condition is met. 
//sytax: initial expression
  // do (condition) while {statement}
console.log('\n do while');
let k =0 
 do {
    console.log(names[k]);
    k++
  }while(k< names.length)

//break & continue Statements
//break: used to exit the program/loop:

let i:number = 1; 
//break statement: causes the program to exit the loop
for ( let j:number = 1; j<=10; j++){
  if (i==5){
    break;
  }
}
console.log(j);
//cotinue Statement: terminates/skips the particular iteration & continues subsequent
for ( let a =1; a<=7; a++){
  if (i==5){
    continue;
  }
}
console.log(a)

