//Objects//syntax
let user:any ={
    name : "hira",
    F_name: "hussain",
    class : 10,
    subjects : ["math", "science", "computer", "islamic"],
    mobile : true,
    school : { //object within object
        principal : "shanzy",
        phone : 1234,}
    } 

    // Access single key-value
    console.log(user.name) //by dot notation
    console.log(user["class"]) //by bracket notation

    //to access key-value of object within object
    console.log(user.school.phone);
    //checks presence/absence in object
    console.log("subjects" in user);
    
     //replacing key value
    const myObjc = {
        name: "Muhammad Fasih",
        age: 20,
        rollNum: 1234,
    }
    const myKey: keyof typeof myObjc = "name";
    myObjc[myKey] = "Salman";
    console.log(myObjc)

    //To add new key-value pair within an object
    user['address'] = "orangi town gulshn-e-zia";
    user['institution'] = 'governor house';//by bracket notation
    user.transport = "public"; //by dot notation
    user.school['fees'] = 2000; //add key into key
    //console.log(user);

    //to remove key-value from obj
    delete user.name;
    delete user.address;
    delete user.age;
    delete user["class"]
    console.log(user);

    //to access keys property by for loop
    for (let key in user){
        console.log(key)} ;
    //console.log(user);

    //vlaues can be updated if object declared with const
    const person = {
        name: " ali",
        age : 40,
        Id: 2345
    }
    person.age = 49 
    console.log(person);

    //Object Destructure
    const myData = {
        name: "Fasih",
        age: 20,
        isPresent: true
    }
    console.log(myData.name);
    const { name, age, isPresent} = myData;
    console.log(age);
    console.log(name);

    // Array of objects
const person1 ={
    name: "Shan"
}
const person2 = {
    name: "Fari"
}
     const person3 = {
        name: "bina"
    }
    let Array = [person1, person2, person3];
    console.log(Array);
    //nested object
    const myValue ={
        name: "Guria",
  address: {
    country: {
        city: {
            location: "Gulshan"
        }
    }
  }
    } //destructure
    const {location} = myValue.address.country.city;

    //for in Loop(objects)

    const myObj: any ={
        name: "ss",
        age: 20,
    }
    for (const x in myObj){
        console.log(myObj[x]); //values
       console.log(x); //keys
    }
    for (const x in myObj){
        console.log(`Key: ${x} , value: ${myObj[x]}`);
    }



    
    
    
    
    
    