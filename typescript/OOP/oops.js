//Programming paradigms: Programming paradigms are fundamental styles or approaches to programming.
//they provide a framework for solving problems & writing programs.
//Different paradigms emphasize various concepts & techniques, guiding how software developers structure & think about their code.
let admin = {
    name: "Bilal",
    age: 45,
    gender: "male",
    salary: 500000,
};
// class
class BakeryItem {
    name;
    price;
    state;
    //constructor: 
    //this keyword: it gives parent object when logged
    constructor(name1, price1, state1) {
        this.name = name1; //constructor parameter can be same as that ot class properties
        this.price = price1;
        this.state = state1;
    }
    ;
    printDetail() {
        console.log(`Welcome to come in Times Bakery!
            Item name is ${this.name} of ${this.price} rupees.`);
    }
}
console.log('pastry');
//Creating instance 
let item1 = new BakeryItem('cake', 200, "fresh");
let item2 = new BakeryItem('bread', 300, 'fresh');
console.log(item1); //instane 1
item1.printDetail(); //detail of instance1
console.log(item2); //instance2
item2.printDetail(); //detail of instance2
//Inheritance:
class Pastry extends BakeryItem {
    flavor; //properties of parent class with a new property of child class
    constructor(flavor, name, price, state) {
        super(name, price, state);
        this.flavor = flavor;
        this.name = name;
        this.price = price;
        this.state = state;
    }
}
console.log('pastry1');
const pastry1 = new Pastry("vanilla", "pastry", 100, "fresh");
console.log(pastry1);
class Pastery2 extends BakeryItem {
    location;
    constructor(location, name, price, state) {
        super(name, price, state);
        this.location = location;
        this.name = name;
        this.price = price;
    }
}
console.log('pastry2');
const pastry2 = new Pastry("Dico mor sector 11/2", "Ghosia Bakers", 200, "fresh product");
console.log(pastry2);
//Polymorphism:
class Pastery3 extends BakeryItem {
    location;
    constructor(location, name, price, state) {
        super(name, price, state);
        this.location = location;
        this.name = name;
        this.price = price;
    }
    printDetail() {
        console.log(`Welcome to come in Times Bakery!
            Item name is ${this.name} of ${this.price} rupees from  ${location}`);
    }
}
console.log('pastry3');
const pastry3 = new Pastry("pineapple", "pastry", 150, "fresh");
console.log(pastry3);
pastry3.printDetail();
export {};
