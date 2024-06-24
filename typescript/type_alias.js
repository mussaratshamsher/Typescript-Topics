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
//Type Union
// Allows a variable to hold values of multitypes.
//Variable can be of one type or another
//Syntax: Let myVariable : datatype1 | dataType2 | datatype 3;
let age;
age = "twenty";
age = 35;
export {};
