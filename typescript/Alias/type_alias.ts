
//Type Alias: a type that helps to create a custom type. 
//its like a shortcut for descirbing more complex information,i.e.details of shapes
//type is declared before name
type Shape = {
    kind: "circle" |  "rectangle";
    radius? : number;
    width? : number;
    height? : number;
}
//Describing Circle
let circle: Shape = {
     kind : "circle",
    radius : 4,
    width : 6,
}
//Describing rectangle
let rectangle: Shape = {
    kind : "rectangle",
    width : 8,
    radius : 4,
}

//Type Literals: we can specify exact values that a variable can hold using type literals.
// it is useful when we want to restrict a variable to a specific value or set of vlaues.
//Syntax: let myVariable:  "myvalue" |" myvalue1" | "myvalue2";

let drinkSize:   "Small" | "Medium" | "Large";
drinkSize = "Small";
drinkSize = "Large";

let favColor :"black" | "blue" | "white" | 7;  //octal literals are not allowed.i.e.098766
favColor = 'white';
console.log(favColor); //output white


//Type Union
// Allows a variable to hold values of multitypes.
//Variable can be of one type or another
//Syntax: Let myVariable : datatype1 | dataType2 | datatype 3;

let age: string | number ;
age = "twenty";
age =  35;

let data: string | number = "Ali";
data = 12;
console.log(data.toString);