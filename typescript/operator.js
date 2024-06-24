// Operators
// 1  Additon
let num1 = 4;
let num2 = 2;
let sumNum = num1 + num2;
console.log(sumNum);
// Concatenation
console.log("4" + 2);
console.log(4 + 1 + "2");
//2 Subtraction
let subtractNum = num1 - num2;
console.log(subtractNum);
//3 Multiplication
let multiplyNum = num1 * num2;
console.log(multiplyNum);
//4 Division
let divideNum = num1 / num2;
console.log(divideNum);
//5 Modulus
let num_1 = 5;
let num_2 = 3;
let remainder = 5 % 3;
console.log(remainder);
//6 Exponentions
let exponent = 5 ** 3;
console.log(exponent);
let personName = "Ayesha khan";
console.log("Title Case:", personName.replace(/\bw/g, c => c.toUpperCase()));
// Unary operators
//let a = 5
//let b = 2
//let c = ++a + a++ +--b + b-- +a +b++ +b
//console.log(++a) // pre Increment
//console.log(b++) // post increment
//console.log(b++) // P.I shows result when ussed 2nd time
//console.log(--b) // pre decrement
//console.log(a--) // post decrement
//console.log(b--)
//console.log(a--)
//console.log(b--)
//console.log(c)
//conditional ternary operators
// shrinked form of If-Else 
//syntax:
let isSchool = true;
let work = isSchool ? "notebook" : "luch";
console.log(work);
let isHome = false;
let rest = isHome ? "pillow" : "glasses";
console.log(rest);
let is_home = true;
if (rest) { //in if else form
    console.log("pilllow");
}
else {
    console.log("glasses");
}
let isThirsty = true;
let home = isThirsty ? "water" : "juice";
console.log(home);
export {};
