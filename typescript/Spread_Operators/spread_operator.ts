
//they are used in Array & objects
//They unpack the elements of Array & Objects

//Use in Array: They can be used in 3ways

//clone or copy:
const numbers = [1,3,4,6];
const newNum = [...numbers];
console.log('colne', newNum);
//Merge: two packed Arrays can be merged into an array using spread operator
const oldNum = [1,3,5,7];
const newNum2 = [ 4, 5,6,];
const totalNum = [...oldNum, ...newNum2];
console.log('merge', totalNum);
//Compose: data can be added at the start or end
const totalNum2 = ['A', ...oldNum, ...newNum2, 100]
console.log('update', totalNum2);

//In Objects: 

//Clone: a copy of object can be create using spread operator
const order = {
    id: 123,
    date: "7/7/2024",
    address: "Mansoor Nagar"
}
const newOrder = {...order};
console.log(newOrder);
//Merge: two objects can be combined to make single object using spread operator
const user = {
    name: "Ali",
    city: "Karachi"
}

const newUser= {
    ...order, ...user
}
console.log(newUser);
