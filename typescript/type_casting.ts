//Type casting & Narrowing   

//type Casting
//Type casting is essential for performing various operations, 
//including arithmetic calculations, and data, manipulation, and compatibility checks

//Type casting can happen in one of two ways: 
//implicit, which is when TypeScript handles the operation, 
//or explicit, when the developer handles the conversion.
//Explicit casting
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

//Narrowing
//Narrowing in TypeScript refers to the process of narrowing down the type of a variable or expression 
//it helps make code more robust by allowing precise typing based on runtime conditions.
//Narrowing is also useful when working with union types or discriminated unions.

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




//Enum & const Enum
//Enum
//an enum is a way to define a set of named constants. 
//It allows developers to create a collection of related values
//Enums are useful for defining  working with a fixed set of values.i.e.days of the week,colors, or status codes. 
//They provide type safety and readability to the code 
//rather than using enum , const enum is preferred
//Enum value counts from zero like index value
//Syntax: enum vairable{constant object}
          //log statement
 enum car {'Alto', 'Mehran', 'Suzuki', 'Cultus'}         
console.log(car[1]); //giving index to log element 'Mehran'
console.log(car['Suzuki']); //accessing index using element

//Q: Enum for days of week. function that takes a day as an argument & returns "Weekend" if Saturday/Sunday & 
// "Weekday" for other days.
enum days{
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
}
function enumDays(days: [key:string] ){
 

}


//const Enum
//Using const enums can improve performance and reduce memory overhead
//by eliminating unnecessary runtime objects created by regular enums.
//there is no JavaScript representation for const enums,
//they can only include constant members (such as string literals or numbers),
//they can't take auto incremented values but enums take

const enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;
const enum Color1 {Red = 1, Green, Blue};
//var colorName: string = Color[2]; //Not allowed with const enums
//console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);


