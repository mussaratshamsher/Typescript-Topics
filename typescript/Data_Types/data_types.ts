//string
console.log('mostly they are in form of aplhabets. exprssed using double quotes("").i.e. "a", "5". both are string ')
let name:string = "bina";
let stringDigit:string = "5"

//Number
console.log("data in form of numbers, numbers typed data 2, 44, 567.")
let num:number = 56;

//Boolean
console.log("data in form of true or false.");
let isRaining = true;
let isWindy = false;

//Array
//data is written in [] each element is stored in ""/''
//elements are separated by ,
console.log("they can store every kind of data.i.e. string, number,boolean, object, array");
let array = ['string', false, 67, 8>2, ]

//never
//if any function have never type retrun data then its ending vaue will not be reachable
//gives infinite value
// Function returning never must not have a reachable end point
// Function returning never must not have a reachable end point
//function error(message: string): never {
 //   throw new Error(message); }
 // var f:never = null  throws error as null is not assigned to never type

 //unknown
//represents a variable where the type is not known at the of writing code
let data:unknown;
  data = 5;
  data = 'name';
  data = true;
  data = function(){};
  data = {};
  data = [];
  data = undefined
  //data = any; //throws error

//any
// in any type we can store any kind of data
// it may be number,string,boolean,function,array, object etc
let value: any;
value = 5;
value = 'name';
value = false;
value = [];
value = {};
value = function (){};
value = null
value = undefined 
//value = unknown          throws error

//null:
// intentional absence of value. Mostly not used in typescript
var x = null //null as a value of variable
console.log(x);
x = 'hello'
console.log(x);
var y:null;    
 // y = 12 throws error when assign value

//undefined:
//represents a variable where the type is not known at the of writing code
var a = undefined ;
a= 10;
console.log(a);
var b: undefined;
//b = 34 throws error


//BigInt:
//data  type that allows large integer to represent
//type can store number larger than the maxi. limit for number type

//Symbol:
//a unique and powerful data type that allow to create &
//use identifiers that are both unique and immutable. 
//They are particularly useful for creating property keys for objects 
//and for creating private properties or methods in classes.
//unique and immutable primitive value.

//void:
//when value is never returned
var nothing: void = undefined;
// nothing = 'hina'; //error as it will not return anything
// nothing = 56  //error as it will not return anything

