// Generics :
// Generics in TypeScript allow to create reusable code components that can work with different types.
//This is particularly useful when you have functions, classes, or interfaces that need to work with various data types but you want to enforce type safety.
// Generic Function: A generic function can handle different types without losing type safety
function identity(arg) {
    return arg;
}
let output1 = identity("Hello"); // Here, T is a string
let output2 = identity(42); // Here, T is a number
// In this example:
// `identity` is a generic function with a type parameter `T`.
//  `arg: T` means the function accepts a parameter of type `T`.
//  `: T` after the function means the function returns a value of type `T`.
//Generic Classes: A generic class can create objects that work with various types.
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
    getContents() {
        return this.contents;
    }
}
let stringBox = new Box("Hello World");
console.log(stringBox.getContents()); // Outputs: Hello World
let numberBox = new Box(123);
console.log(numberBox.getContents()); // Outputs: 123
let stringNumberPair = { first: "Hello", second: 42 };
console.log(stringNumberPair); // Outputs: { first: 'Hello', second: 42 }
let numberBooleanPair = { first: 1, second: true };
//In this example:
//  `Pair<T, U>` is a generic interface with type parameters `T` and `U`.
//  `first: T` and `second: U` define properties with types `T` and `U`.
// Generic Constraints: Sometimes you want to restrict the types that can be used with generics. You can do this with constraints.
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity("Hello"); // Works, string has a length property
loggingIdentity([1, 2, 3]); // Works, array has a length property
export {};
// In this example:
//  `T extends { length: number }` means `T` must have a `length` property.
//Conclusion:
//Generics help to write flexible and reusable code while ensuring type safety in TypeScript.
