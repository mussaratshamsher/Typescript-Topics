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
let space = name.join("--");
console.log('--', space);
//Concate Method
//Merges(joins) two or more arrays. builtin method of typescript
const ar1 = [1, 4, 2, 5];
const ar2 = [2, 3, 5];
console.log('concat');
console.log(ar1.concat(ar2)); //merges & logs both array as a single array
//map Method: creats copy of old array with new values
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//double each number
let doubleNum = array.map((CurrentVal) => CurrentVal * 2);
//console.log('Double number:', doubleNum);
//convert number into string
const numChange = array.map((CurrentEle) => CurrentEle.toString);
//console.log('string', numChange); //error result
//Filter Method: filter out selcted element
const evenNumber = array.filter((CurrentEle) => CurrentEle % 2 === 0);
//console.log('EvenNumber', evenNumber);
//number greater than 3
const numGreater = array.filter((CurrentEle) => CurrentEle > 3);
console.log("greater", numGreater);
// Find: returns the  Element
const fruit1 = ["apple", "banana", "pear"];
const result = fruit1.find((val) => {
    return val == "pear";
});
//Include: checks if specific value is present or not
const find = fruit1.includes("banana", 2);
console.log('Include', find);
//reduce : reduce number by doing sum of given multiple numbers 
const result1 = array.reduce((acc, current) => acc + current, 0);
console.log('Reduce', result1);
let numbers = [1, 2, 3, 4, 5];
const result5 = numbers.reduce((acc, current) => acc + current, 0);
console.log('result5', result5);
const myData = [30, 20, 10];
myData.reduce((a, b) => { return a + b; }, 0);
console.log(myData);
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
//using typeOf for Array
let thisArray = [1, 3, 4, 5];
console.log(typeof thisArray);
export {};
