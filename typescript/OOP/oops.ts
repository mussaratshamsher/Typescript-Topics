//Programming paradigms: Programming paradigms are fundamental styles or approaches to programming.
//they provide a framework for solving problems & writing programs.
//Different paradigms emphasize various concepts & techniques, guiding how software developers structure & think about their code.

//Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects,
//rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.
//OOP is a programming paradigm that uses objects to model real-world entities.

//Benefits of OOP:
//Modularity: Code is organized into reusable classes.
//Reusability: Once created , object & classes can be reused in other programs.
//Scalability: Easy t extend & maintain.

//Key concepts of OOP & 4 Main Pillars of OOP
// Classes (A blue print for creating objects) & Objects  (instance of calss)
// Properties (Characteristics or attributes of an object) & Methods (Actions or behaviours that objects can perform) 
//1. Inheritance :  One property of object is aquiring to another property of object
//2. Polymorphism : Different behaviour at different instances
//3. Encapsulation: Protecting data
//4. Abstraction : Hiding irrelevent data

//Interface: Allows to define the structure or shape of an object & specify the properties & methods that an object has 

interface Person { //interface
    name : string;
    age  : number;
    gender : string;
}
interface Employee {
    name: string;
    salary: number;
}
type Admin = Person & Employee //different interfaces typed into one
let admin: Admin ={
    name: "Bilal",
    age: 45,
    gender: "male",
    salary: 500000,
}

// class

class BakeryItem {
    name: string;
    price: number ;
    state: string;
//constructor: 
//this keyword: it gives parent object when logged
constructor(name1: string, price1: number, state1: string) {
    this.name =name1; //constructor parameter can be same as that ot class properties
    this.price =price1;
    this.state =state1;

}; 
    printDetail(){ // funtion to print detail
        console.log(`Welcome to come in Times Bakery!
            Item name is ${this.name} of ${this.price} rupees.`);
    }
}
console.log('pastry');

//Creating instance 
let item1 = new BakeryItem('cake', 200, "fresh")
let item2 = new BakeryItem('bread', 300, 'fresh');
console.log(item1); //instane 1
item1.printDetail(); //detail of instance1
console.log(item2); //instance2
item2.printDetail(); //detail of instance2

//Inheritance:

class Pastry extends BakeryItem{
    flavor: string; //properties of parent class with a new property of child class

    constructor(flavor: string,name: string, price: number, state: string){
        super(name,price, state)
        this.flavor = flavor 
        this.name = name;
        this.price = price;
        this.state = state; 
    }
}
console.log('pastry1');

const pastry1 = new Pastry("vanilla","pastry", 100, "fresh" )
console.log(pastry1);

class Pastery2 extends BakeryItem{
    location: string;
    constructor(location: string, name: string, price: number, state: string){
        super(name, price, state)
        this.location = location;
        this.name = name;
        this.price = price;
    }
}
console.log('pastry2');

const pastry2 = new Pastry("Dico mor sector 11/2", "Ghosia Bakers", 200, "fresh product")
console.log(pastry2);

//Polymorphism:
class Pastery3 extends BakeryItem{
     location: string
    constructor(location: string, name: string, price: number, state: string){
        super(name, price, state)
        this.location = location
       this.name = name;
        this.price = price;
    }
    printDetail(){ // funtion to print detail
        console.log(`Welcome to come in Times Bakery!
            Item name is ${this.name} of ${this.price} rupees from  ${location}`);
    }
}
console.log('pastry3');
const pastry3 = new Pastry("pineapple","pastry", 150, "fresh");
console.log(pastry3);
pastry3.printDetail();



