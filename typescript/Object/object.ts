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
    for (let key in user){
        console.log(key)} ;//to access keys property by for loop
    //console.log(user);
    // Access single key-value
    //console.log(user.name) //by dot notation
    //console.log(user["class"]) //by bracket notation
    //console.log(user.school.phone)//to access key-value of object within object
    //checks presence/absence in object
    //console.log("subjects" in user)
    //To add new key-value pair with in an object
    //user['address'] = "orangi town gulshn-e-zia";
    user['institution'] = 'governor house';//by bracket notation
    user.transport = "public"; //by dot notation
    //console.log(user);
    //to remove key-value from obj
    //delete user.address;
    delete user.age;
    delete user["class"]
    console.log(user);

    const person = {
        name: " ali",
        age : 40,
        Id: 2345
    }//vlaues can be updated if object declared with const
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
//     for (const x in myObj){
//         console.log(`Key: ${x} , value: ${myObj[x]}`);
//     }



    
    
    
    
    
    