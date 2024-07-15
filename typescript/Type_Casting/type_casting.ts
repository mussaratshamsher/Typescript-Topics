//Type casting & type Narrowing   

//type Casting
//Type casting is essential for performing various operations, 
//including arithmetic calculations, and data, manipulation, and compatibility checks

//Type casting can happen in one of two ways: 
//implicit, which is when TypeScript handles the operation, 
//or explicit, when the developer handles the conversion.

//Explicit casting:
//explicit casting is the process of explicitly converting a value from one data type to another.
//This is done using the "as" keyword or by using type assertion.
//Explicit casting should be used carefully, as it can lead to runtime errors if the conversion is not valid. 
let myname: unknown = "Rabia";
console.log((myname as string).length);
console.log((<string> myname).length)

let myphone: unknown = "039946";
console.log((myphone as string).concat);

//Implicit Casting
//implicit casting(or automatic type conversion or type coercion) is the process of
//automatically converting a value from one data type to another without the need for explicit syntax.
//Implicit casting can be useful as it allows for more convenient and intuitive coding.
//but also involve potential risk & surity of approprate specific use Case.

let num: number = 10;
let str: string = "Hello";
let result = num + str; 
console.log(result); // Output: "10Hello"

let num1: boolean | unknown =5 //if assigned unknown as a type then can give any value

//Narrowing   //type guard: (typeof , instanceof)
//Narrowing in TypeScript refers to the process of narrowing down the type of a variable or expression 
//it helps make code more robust by allowing precise typing based on runtime conditions.
//Narrowing is also useful when working with union types or discriminated unions.
//type Guard: typeof
let x: string | number;
x = "mussarat"
if (typeof x === 'string') {
  // Here, TypeScript narrows down the type of `x` to string
  console.log(x.toUpperCase());
} else {
  // Here, TypeScript knows that if we're not in the string branch,
  // then `x` must be a number
  //console.log(x.toFixed(2));
  console.log('throws error')
}
let arr = [1,2,3];
console.log(typeof arr);
let person = {
  name: " Hira",
  home: "Multan",
}
console.log(typeof person);
function myName(){
  console.log("123"); 
}
console.log(typeof myName);
//key of
const myObj = {
  name: " Hadi",
}
const mykey: keyof typeof myObj = "name";
myObj[mykey];

//instance of
class A{
  first () {
    console.log("This is class A.");
  }
}
class B {
  second () {
    console.log("This is class B.");
  }
}
function typeCheck(data: A|B) {
if (data instanceof A){
  data.first();
}else{
  data.second();
}
}
const myClass1: A = new A() // intance of class A
typeCheck(myClass1);
const myClass2: B = new B()
typeCheck(myClass2);

//Union type :  we can use two or types of data can be using union sign

let data: string | number = "Ali";
data = 12.
console.log(data.toString);

//Union Literals: We can give multiple values as type to a variable using union literals  
//each value is separated using union sign
let favColor :"black" | "blue" | "white";
favColor = 'white';
console.log(favColor); //output white

