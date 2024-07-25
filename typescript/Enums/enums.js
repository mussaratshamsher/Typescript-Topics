//Enum & const Enum
//Enum
//an enum is a way to define a set of named constants. 
//It allows developers to create a collection of related values
//Enums are useful for defining  working with a fixed set of values.i.e.days of the week,colors, or status codes. 
//They provide type safety and readability to the code 
//rather than using enum , const enum is preferred
//Enum value counts from zero like index value
//Syntax: enum vairable{constant object}
//computed enums: when values assigned to member of enum other than number, so the member will be computed enum .
// Fully inilitiazed enum:if values assigned to all members then enum will be fully initialized
//Partially initilized enum: if values assigned to some of the members then enum will be partially inilized.
//heterogeneous  : differnt type of value assigned to members
//homogenesous enums: same type of value assigned to members
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
})(Days || (Days = {}));
console.log(Days);
console.log(2 /* Days2.Saturday */);
//log statement
var car;
(function (car) {
    car[car["Alto"] = 0] = "Alto";
    car[car["Mehran"] = 2] = "Mehran";
    car[car["Suzuki"] = 4] = "Suzuki";
    car[car["Cultus"] = 6] = "Cultus";
})(car || (car = {}));
console.log(car[0]); //giving index to log element 'Mehran'
console.log(car['Suzuki']); //accessing index using element
//Q: Enum for days of week. function that takes a day as an argument & returns "Weekend" if Saturday/Sunday & 
// "Weekday" for other days.
var days;
(function (days) {
    days[days["monday"] = 0] = "monday";
    days[days["tuesday"] = 1] = "tuesday";
    days[days["wednesday"] = 2] = "wednesday";
    days[days["thursday"] = 3] = "thursday";
    days[days["friday"] = 4] = "friday";
    days[days["saturday"] = 5] = "saturday";
    days[days["sunday"] = 6] = "sunday";
})(days || (days = {}));
function enumDays(days) {
}
console.log(days.wednesday); //gives index of wed
console.log(days[5]); // gives value on given index
; //starts with 0
var c = 1 /* Color.Green */;
;
; //can assign values to all
var colorIndex = 4 /* Color2["Blue"] */;
console.log(colorIndex);
export {};
//difference bw enum & const enum
//reverse maping: members and values both can be get in case of enum.this is known as reverse maping
//enum shows reverse maping but const enum does not log whole enum entity
//const enum's performance is better than simple enum
