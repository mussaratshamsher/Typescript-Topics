// Using 'async/await' :
//async/await is essentially a syntactic sugar for promises, which is to say that the async/await keyword is a wrapper over promises. An async function always returns a promise. 
//Even if we omit the Promise keyword, the compiler will wrap your function in an immediately resolved promise.

function delay(milisec: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 0);
    });
}
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

// async-await : latest type of promise
async function prepare_tea(){
    try{ await delay (0)
        console.log("Await making Tea!");
        await delay (0)
        console.log("Add Water");
        await delay (5000)
        console.log('Add Milk');
        await delay (2000)
        console.log('Add Sugar');
        await delay (0)
        console.log('Tea is ready');
    } catch (error) {
        console.log('Something went wrong', error); 
    }
}
prepare_tea();

//data fetched from API 
//type json placeholder in google search bar to get data
// fetch function for .then/.catch

let url = "https://jsonplaceholder.typicode.com/posts/1"; //took url from json placeholder

let data = fetch(url)
.then((res) => (res.json()))
.then((data) => console.log(data))
.catch((err) => console.log(Error));

//async /await: modern type of Promise 

let url1 = "https://jsonplaceholder.typicode.com/posts/1";

let func = async() => {
    let data = await fetch(url1)
    let result = await data.json()
    console.log(result);
    
}
//taking data from array to fetch using async/await
let fetchData = ["Talha", "Ali", "Maria"]

async function Data( ) {
    await console.log(fetchData);
}
Data();

