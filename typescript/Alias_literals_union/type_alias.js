//Describing Circle
let circle = {
    kind: "circle",
    radius: 4,
    width: 6,
};
//Describing rectangle
let rectangle = {
    kind: "rectangle",
    width: 8,
    radius: 4,
};
//Type Literals: we can specify exact values that a variable can hold using type literals.
// it is useful when we want to restrict a variable to a specific value or set of vlaues.
//Syntax: let myVariable:  "myvalue" |" myvalue1" | "myvalue2";
let drinkSize;
drinkSize = "Small";
drinkSize = "Large";
let favColor; //octal literals are not allowed.i.e.098766
favColor = 'white';
console.log(favColor); //output white
let personAge;
personAge = 90; //OK
personAge = "died"; //OK
personAge = "unknown"; //OK
//age = "living";//Error
let zia;
zia = "zia";
//zia = "khan";//Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName?.toUpperCase(); //OK
//Type Union
// Allows a variable to hold values of multitypes.
//Variable can be of one type or another
//Syntax: Let myVariable : datatype1 | dataType2 | datatype 3;
let age;
age = "twenty";
age = 35;
let data = "Ali";
data = 12;
console.log(data.toString);
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
//myname = undefined; //Error
//myname = 12; //Error
let myAge;
myAge = 16; //narrowing
console.log(myAge);
//console.log(myAge.toLowerCase());//Error
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
//because of narrowing
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let data1;
export {};
