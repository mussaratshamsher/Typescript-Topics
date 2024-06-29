//fresh object:  newly created object
let myobj1 = { name: "Ali",
    age: 20,
    address: "Gulsh-e-Hadeed",
};
let myobj2 = {
    name: " Hina",
    age: 40,
    address: "Shah Faisal Chock",
};
myobj1 = myobj2;
myobj2 = myobj1;
let ball = { diameter: 20, size: 'medium' };
let sphere = { diameter: 10, size: 'small' };
ball = sphere; //gives no error
sphere = ball; //no error because type  & access values are both compatible
let tube = { diameter: 20, size: 'medium', radius: 10 };
//tube = ball  shows error as radius is missing in tube 
ball = tube; //no error as checking only compatibility
//object declared with the `Person` interface can be assigned 
//to a variable as a type & assigned a variable employee as vlaue 
let person1 = { name: "John", age: 30 };
let employee1 = { name: "shan", age: 24, salary: 4500 };
let Worker = employee1; //no Error as two properties are same within both & salary is skipped
const addNumbers1 = (a, b) => a + b;
const addNumbers2 = addNumbers1; // no error due to same structure
export {};
