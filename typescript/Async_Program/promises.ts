
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

