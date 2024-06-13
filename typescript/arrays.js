"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic Array operations
//
//Array of fruits
let fruits = ["pear", "orange", "mango", "grapes"];
console.log("Fruit's Array:", fruits);
//add a new fruit to the end. Push Method
fruits.push(" fig"); //push adds new element in array
console.log(fruits); //log to see result
//Pop Method .removing last element of array
fruits.pop(); //pop removes last element
console.log("Pop:", fruits); //log to see result
//Shift Method. remove first fruit from array
fruits.shift(); //shift method removes first element
console.log("shift:", fruits); //log to see result
//find index & remove fruit using index
let fruit = ["pear", "fig", "orange", "banana"];
console.log(fruit);
//adding element using splice
fruit.splice(1, 1, 'mango'); //removes element of index 1& adds new element
console.log(fruit); //logs new array
//finding index of fruit
console.log("Index:", fruit.indexOf("orange")); //output 
//removing fruit using index
//splice method to remove elements
fruit.splice(1, 3); //splice mango-banana 
console.log(fruit); // output pear
//slice method
//slice method returns selected elements as a new array
let alpha = [1, 2, 3, 4, 5];
console.log('Slice:'); //additional
//array.slice(index, index+1)
console.log(alpha.slice(1, 4)); //logs new array of indexed 1,2,3
//joins all elements of array into string
let name = ['S', 'h', 'a', 'n'];
let join = name.join(); //sets array into string
console.log(join); //logs S,h,a,,n
//Concate Method
//Merges(joins) two or more arrays. builtin method of typescript
const ar1 = [1, 4, 2, 5];
const ar2 = [2, 3, 5];
console.log('concat');
console.log(ar1.concat(ar2)); //merges & logs both array as a single array
//Tuples:Typed Array, predefined length, give type for each index
// can't assign value other than type, nor add element
//if define readony type then can add or delete element
let arr = ['name', 23, 'address', true];
console.log(arr);
//multidimensional Arrays
//define 3*3 matrix
//An array consisting of 3arrays each having 3elements init 
//will be multidimensional array of 3*3matrix
let matrix = [
    // C1, C2,C3
    [1, 5, 3], //R1
    [2, 6, 4], //R2
    [9, 0, 8], //R3
];
//accessing element
console.log(matrix[2][0]); // row 2, 0 index value//output 9
console.log(matrix[0][1]); // row 0 , 1 index vlaue
console.log(matrix[1][2]); // row 1, 2 index value
//write a funcion to print diagonal matrix
//diagonal matrix: a matrix having 0 value outside the diagonal
let diaGonal = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
function diagonal() {
    console.log(diaGonal);
}
diagonal();
let library = [
    { title: 'Typescript', author: 'xyz', publishYear: '1123' },
    { title: 'Computer', author: 'abc', publishYear: '2234' }
];
//Adding new book to library
library.push({
    title: 'Genome',
    author: 'def',
    publishYear: '6675',
});
console.log(library);
//finding book by author
let findBook = library.find(book => book.author === 'abc');
console.log('BookByAuthor', findBook);
