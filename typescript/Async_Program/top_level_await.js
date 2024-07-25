//top level await
function fetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        }, 2000);
    });
}
let result = await fetch();
console.log(result);
let result1 = await fetch();
console.log(result1);
export {};
