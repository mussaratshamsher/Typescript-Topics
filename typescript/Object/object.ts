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
    
    
    