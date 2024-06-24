//   tsc && node async_assig.js

//Assignment Questions
//Topic: CallBack Functions, async/await  , try-catch error

//Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".
//function that takes time delay
function timedelay(delay: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, delay))
}
//creatig async function that takes time delay and return "Hello World"
 async function greeting( ): Promise<string> {
    await timedelay (2000);
    return "Hello World";
  }
  //calling immediately invoked function (IIFE) to call at once
  (async () => {
    const message = await greeting(); 
    console.log('Q1', message);
  })();

//Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function callBack(cb: () => void) {
    setTimeout(() => {
        console.log("Q2: Prints message after 1sec.");   
    },1000)
}
function callingCallback() {
    //calling above, so message is given in callBack function
}
callBack(callingCallback);

//Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.

function returnPromsie() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Q3: Resolved.")
        },3000);
    })
    .then((res) => {console.log(res); }) 
    .catch((err) => { console.log(err); });
}
returnPromsie();

//Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.

async function getResult(): Promise<any> {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 200));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 300));
  
    const result1 = await promise1;
    const result2 = await promise2;
     return [result1, result2];
  }
  
    const message = await getResult(); 
    console.log('Q4:' , message);
  
  
  // Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console
  async function Promise1() {
    let promise = await new Promise((resolve,reject) => {
        resolve("Q5: Object_1");
    })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) })
  }
  Promise1();
  // Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
async function Promise2() {
    let promise = await new Promise((resolve,reject) => {
       reject("Q6: Object_2"); 
    })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
}
Promise2();
// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function squareNumber(num: number): Promise<number> {
    let promise: Promise<number> = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(num **2);
        },1000)
    });
    return promise
}
let square = squareNumber(3).then((res) => {console.log(res)});
console.log('Q7:', square);

//  Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.

async function resolveArray(arrayofPromises: Promise<any>[]): Promise<any>{
   let allPromise = await Promise.all(arrayofPromises);
   return allPromise;
} 
let myPromise1 = Promise.resolve('resolve 1');
let myPromise2 = Promise.resolve('resolve 2');
let myPromise3 = Promise.resolve('resolve 3');
let myPromise4 = Promise.resolve('resolve 4');
let myPromise5 = Promise.resolve('resolve 5');

let logPromise = resolveArray([
    myPromise1, myPromise2, myPromise3, myPromise4, myPromise5
])
.then((res) => console.log(res));
console.log('Q8:', logPromise);
// Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.

function repeatinTwoSeconds() {
    setTimeout(() => {
      console.log('Q9: Message is printing in every 2 seconds');
      // calling function to repeat after every 2sec
      //repeatinTwoSeconds(); //uncomment this to print after each 2sec
    }, 200);// prints function in 2sec
  }
  //calling function to log
  repeatinTwoSeconds();
  
  //Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
async function myPromise(promise: Promise<number>): Promise<number> {
    let result = await promise;
    return result * 2;
}
const newPromise = new Promise<number>((resolve) =>
setTimeout(() => {
    resolve (5);
}, 1000)
);

let returnPromise = myPromise(newPromise).then((res) => {
    console.log(res); 
});
 console.log('Q10:' , returnPromise);
  

