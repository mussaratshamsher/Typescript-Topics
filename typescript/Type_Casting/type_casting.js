//Type casting & type Narrowing   
//type Casting
//Type casting is essential for performing various operations, 
//including arithmetic calculations, and data manipulation, and compatibility checks
//Type casting can happen in one of two ways: 
//implicit, which is when TypeScript handles the operation, 
//or explicit, when the developer handles the conversion.
//Implicit Casting
//implicit casting(or automatic type conversion or type coercion) is the process of
//automatically converting a value from one data type to another without the need for explicit syntax.
//Implicit casting can be useful as it allows for more convenient and intuitive coding.
//but also involve potential risk & surity of appropriate specific use Case.
let num = 10;
let str = "Hello";
let result = num + str; //shows type string
console.log(result); // Output: "10Hello"
//Example2
let num1 = 5; //if assigned unknown as a type then can give any value
num1 = "k";
num1 = true;
//Explicit casting:
//explicit casting is the process of explicitly converting a value from one data type to another.
//This is done using the "as" keyword or by using type assertion.
//Explicit casting should be used carefully, as it can lead to runtime errors if the conversion is not valid. 
let myname = "Rabia";
console.log(myname.length);
console.log(myname.length);
let myphone = "039946";
console.log(myphone.concat);
//Narrowing   //type guard: (typeof , instanceof)
//Narrowing in TypeScript refers to the process of narrowing down the type of a variable or expression 
//it helps make code more robust by allowing precise typing based on runtime conditions.
//Narrowing is also useful when working with union types or discriminated unions.
//type Guard: typeof
let x;
x = "mussarat";
if (typeof x === 'string') {
    // Here, TypeScript narrows down the type of `x` to string
    console.log(x.toUpperCase());
}
else {
    // Here, TypeScript knows that if we're not in the string branch,
    // then `x` must be a number
    //console.log(x.toFixed(2));
    console.log('throws error');
}
let arr = [1, 2, 3];
console.log(typeof arr);
let person = {
    name: " Hira",
    home: "Multan",
};
console.log(typeof person);
function myName() {
    console.log("123");
}
console.log(typeof myName);
//key of
const myObj = {
    name: " Hadi",
};
const mykey = "name";
myObj[mykey];
//instance of
class A {
    first() {
        console.log("This is class A.");
    }
}
class B {
    second() {
        console.log("This is class B.");
    }
}
function typeCheck(data) {
    if (data instanceof A) {
        data.first();
    }
    else {
        data.second();
    }
}
const myClass1 = new A(); // intance of class A
typeCheck(myClass1);
const myClass2 = new B();
typeCheck(myClass2);
export {};
