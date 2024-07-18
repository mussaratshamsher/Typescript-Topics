
//fresh object:  newly created object

//staled objects: old or already used object 

//strong typing checks compatibility & access vlaues of fresh objects but 
//in scaled objects TS ignores access values.

//Structural Typing:
//It means that when comparing types, TypeScript only takes into account the members on the type.
//This is in contrast to nominal type systems, where you could create two types but 
//could not assign them to each other.
//This can be particularly useful when working with libraries or
// APIs that provide data in different shapes but with similar functionality.

 type Object ={ name: string, age: number, address: string};
 let  myobj1: Object = { name: "Ali",
     age: 20, 
     address: "Gulsh-e-Hadeed",
    };
  let myobj2 ={
    name: " Hina",
    age : 40,
    address: "Shah Faisal Chock",
  }
      myobj1 = myobj2 
      myobj2 = myobj1 

//shapes of two objects are completely transferable
type Ball ={ diameter: number, size: string};
type Sphere = { diameter: number, size: string};

let ball: Ball= { diameter: 20, size: 'medium' };
let sphere: Sphere = { diameter: 10, size: 'small'}
    
ball = sphere //gives no error
sphere = ball //no error because type  & access values are both compatible

  // If we add a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.
interface Tube {
  diameter: number;
  size : string;
  radius : number 
}

let tube: Tube = { diameter: 20, size: 'medium' , radius: 10 };

//tube = ball  shows error as radius is missing in tube 
ball = tube //no error as checking only compatibility

// consider two interfaces:

interface Person {
  name: string;
  age: number;
}
interface Employee {
  name: string;
  age: number;
  salary: number;
}
//object declared with the `Person` interface can be assigned 
//to a variable as a type & assigned a variable employee as vlaue 

let person1: Person = { name: "John", age: 30 };
let employee1 : Employee = {name: "shan", age: 24, salary: 4500}

let Worker :Person = employee1 //no Error as two properties are same within both & salary is skipped

//Structural typing also works with function types. For example, if two functions have compatible 
//parameter types and return types, they can be assigned to each other:

type Adder = (a: number, b:number) => number;

const addNumbers1: Adder = (a, b: number) => a + b;
const addNumbers2: (x: number, y:number) => number = addNumbers1; // no error due to same structure
