// import of Variable
import { myProject } from "./calculator.js";
console.log(myProject);
// Importing addition function
import { addition } from "./app.js";
console.log(addition(8, 6));
// Importing subtraction function
import { subt } from "./app.js";
console.log(subt(3, 2));
// Importing Division function
import { divide } from "./app.js";
console.log(divide(8, 4));
// Importing Modulus & exponention function
//multiple files import
import { modulus, exponent } from "./app.js";
console.log(modulus(7, 3));
console.log(exponent(4, 2));
console.log("Print my message!");
