// Generics :
// Generics in TypeScript allow to create reusable code components that can work with different types.
//This is particularly useful when you have functions, classes, or interfaces that need to work with various data types but you want to enforce type safety.

// Generic Function: A generic function can handle different types without losing type safety
function identity<T>(arg: T): T {
 return arg;
}
let output1 = identity<string>("Hello"); // Here, T is a string
let output2 = identity<number>(42); // Here, T is a number

// In this example:
// `identity` is a generic function with a type parameter `T`.
//  `arg: T` means the function accepts a parameter of type `T`.
//  `: T` after the function means the function returns a value of type `T`.

//Generic Classes: A generic class can create objects that work with various types.

class Box<T> {
 contents: T;
 constructor(value: T) {
 this.contents = value;
 }
 getContents(): T {
 return this.contents;
 }
}

let stringBox = new Box<string>("Hello World");
console.log(stringBox.getContents()); // Outputs: Hello World

let numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // Outputs: 123

// In this example:
//  `Box<T>` is a generic class with a type parameter `T`.
// `contents: T` and `constructor(value: T)` use the type `T`.
//  `getContents(): T` returns a value of type `T`.

// Generic Interfaces: A generic interface can define a structure that works with various types.

interface Pair<T, U> {
 first: T;
 second: U;
}

let stringNumberPair: Pair<string, number> = { first: "Hello", second: 42 };
console.log(stringNumberPair); // Outputs: { first: 'Hello', second: 42 }
let numberBooleanPair: Pair<number, boolean> = { first: 1, second: true };

//In this example:
//  `Pair<T, U>` is a generic interface with type parameters `T` and `U`.
//  `first: T` and `second: U` define properties with types `T` and `U`.

// Generic Constraints: Sometimes you want to restrict the types that can be used with generics. You can do this with constraints.

function loggingIdentity<T extends { length: number }>(arg: T): T {
 console.log(arg.length);
 return arg;
}
loggingIdentity("Hello"); // Works, string has a length property
loggingIdentity([1, 2, 3]); // Works, array has a length property

// In this example:
//  `T extends { length: number }` means `T` must have a `length` property.

//Conclusion:
//Generics help to write flexible and reusable code while ensuring type safety in TypeScript.
