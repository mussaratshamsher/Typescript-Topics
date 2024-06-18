
//Switch Statement: Short form of if-else
//saves time if checking for multiple conditions 
//Executes one statement for multiple conditions
//Syntax: switch(myvariable) { case condition :  console.log(message); break; }  
//Main keywords:
//1. case: for particular condition 2. beak:if you dont write break then it'll execute whole code. it is optional
//3. if none of the condition matches, default condition 'llbe printed. it is optional  
// Checking for valid week number

let weekNumber: number = 10;
switch (weekNumber) {
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;
    case 3:
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wednesday");
    break;
    case 5:
    console.log("Thursday");
    break;
    case 6:
    console.log("Friday");
    break;
    case 7:
    console.log("Saturday");
    break;
    default :
    console.log("Invlaid Week Number");
    break;
}
//another example
let dayoff = "sunday";
switch(dayoff) {
    case "saturday":
        console.log("complete task")
    break;
    case "sunday":
        console.log("go for trip")
    break;
    case "monday":
        console.log("back to work")
        break;
}
//conditions for percentage
let percentage = 60
switch(percentage){
    case 40:
    console.log("pass")
    
    case 50 :
    console.log("fair")
    
    case 60 :
    console.log("good")
    
    case 70:
        console.log("very good") 
    
    case 80:
    console.log("Excellent")

    default:
}

