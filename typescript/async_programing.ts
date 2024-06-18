
// synchorous programming: program that runs top to bottom or line by line

let welcome = "Welcome in programming";
console.log('Welcome');

//Asynchorous programming:
//asynchronous programming is essential for creating responsive and efficient applications.
//code does not run line by line.
//async program also called web API function. API stands for Application Programming Interface.
//setTimeout: A built in function of javascript that return a promise & is used to delay output
//Syntax of setTimeout:     setTimeout (function( ){ console.log('an anonymous function'),delay count});


console.log(1);
console.log(2);
setTimeout(function(){
    console.log("Asynchronous Program");
    },1000);  
console.log(4);
console.log(5);
//if value of variable is updated after setTimeout then result after time delay 'll be updated

let x: number = 10;
let y: number = 20;
  x = 20;
  y = 10;

  setTimeout(function(){
    console.log(x);
    console.log(y);
  })
    x = 10;
    y = 20;
//Example- 2

let a = "old";
let b = "old2";
setTimeout(function ( ) {
    console.log(a);
},2000);
console.log(b);
  a = "Updated value";
//if setTime is zero or minor then without cosidering that synchronous program runs first then runs asynchronous
//This is because any function given to the setTimeout function will be executed asynchronously, when the main thread is not busy anymore.

  console.log("name1");
  console.log("name2");
  setTimeout(function( ){
    console.log(3);
  }, 500)//set time is 30sec
  for (let i=1 ; i<=5; i++){
    console.log(`inside of log ${i}`);
  };
//if time is zero in async program, then it also runs at the last

  console.log("myName");
  console.log("myage");
  setTimeout(function(){
    console.log("myEducation");
  }, 0);
  console.log("mySkills");
  
  //Asynchronous code using setInterval:
  //setInterval has the same behavior as setTimeout but the code is executed multiple times. 
  //we have to call clearInterval to kill the timer.
  //setTimeout and setInterval are the only native functions of the JavaScript to execute code asynchronously. 
let counter = 0;
let timer = setInterval(function () {
    counter ++;
    console.log(`${counter}. I am an Asynchronous Message.`);
    
    if (counter >= 5) {
        clearInterval (timer);
}
},500); //interval outputafter 
console.log('I am a Synchronous Message.');
