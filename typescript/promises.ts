
//Promise Object properties
//A JavaScript promise object can be: pending,fulfilled(resolved) or Rejected

//while a Promise object is 'pending' (working),the resul is undefined.
//while a Promise object is 'fulfilled', the result is value.
//while a Promise object is 'rejected', the result is an error object.
//The promise object supports two properties: State & Result
// syntax: let myPromise = new Promise (()=>{}) 

let myPromise = new Promise ((resolve, reject)=>{
    console.log("Promise Pending")
    setTimeout(() => {
        console.log("Promise Resolved");
        resolve(["Bilal", "Abbas"])
    },2000);
}) 
myPromise
.then((res) => (console.log(res)))
.catch((err)=>console.log(err));


let newPromise = new Promise ((resolve, reject) => {
    console.log("Promise Pending")
    setTimeout(()=>{
        let data = ["Bilal", "Abbas"]
        if (data) {
            console.log("Promise Resolved")
            return resolve(data)
        } else {
            console.log("promise resolved")
            return reject (new Error ("Data fetching failed!"))
            
        }
    },2000);
}) 
newPromise
.then((res)=> (console.log(res)))
.catch((err)=>console.log(err));    
// Example 
function delay(milisec: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 0);
    });
}
//Using "then", "catch" & "finally"
delay(1000)
.then(() => {
    console.log('The delay is over!');    
})
.catch((error) => {
    console.error('Something went wrong:', error);   
})
.finally(() => {
    console.log('This is always executed');  
});

// Using 'async/await' :
//async/await is essentially a syntactic sugar for promises, which is to say that the async/await keyword is a wrapper over promises. An async function always returns a promise. 
//Even if we omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.
try {
    await delay (1000);
    console.log('Await: The delay is over');  
} catch (error) {
    console.log('Await: Something went wrong:',);
} finally {
    console.log('Await: this is always executd'); 
};   
function prepareTea(taskName: string, delay: number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(taskName);
            resolve("abc");
        },2000)
    });
    return promise;
}
 prepareTea("Add water", 0)
.then(() => prepareTea('Add Milk', 5000))
.then(() => prepareTea('Add Sugar', 2000))
.then(() => prepareTea('Tea is Ready', 0))
.catch(() => console.log('something went wrong.'))

// percentage example
let promise = new Promise((resolve, reject) => {
    let percentage = 80;
    if (percentage >= 80) {
        resolve("Good")
    } else {
        reject("Bad");
    }
})
console.log(promise);   


















