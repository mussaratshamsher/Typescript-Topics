type Employee= {
    name: string,
    salary: number,
    BusTicket: number,
}

let employee1 :Employee = {
    name : "Haris",
    salary : 50000,
    BusTicket : 3000,
}
let employee2 : Employee = {
    name : "Ali",
    salary: 70000,
    BusTicket:  6000,  
}
let employee3 : Employee = {
    name: " Shan",
    salary: 90000,
    BusTicket: 9000,
}
function calculateLeftSalary(employe: Employee){
    return `Name: ${employe.name}, Remaining Salary: ${employe.salary - employe.BusTicket}`
}
console.log(calculateLeftSalary(employee1));
console.log(calculateLeftSalary(employee2));
console.log(calculateLeftSalary(employee3));
