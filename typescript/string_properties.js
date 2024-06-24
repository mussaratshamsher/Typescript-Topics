// ways to declare string
//first way
var name = 'Ali';
//2nd way
var name1 = "Karachi";
//3rd way: using back ticks(tempelate literals)
var name2 = `${name} lives in ${name1}`;
console.log(name);
console.log(name1);
console.log("Tempelate Literals: ", name2);
//property of string: Length of the string
console.log("Length Property:", name.length);
console.log(name2); //takes caharacter as well as whitespaces
//Methods of strings
//charAt( ) : returns character at a given index
console.log("Character At of name1:", name1.charAt(0));
console.log("Character At of name1:", name2.charAt(4));
//concate( ): combines the two or more string & returns the new string
console.log(name.concat(name1));
console.log(name.concat(name1).concat(name2));
//indexOf( ): Returns an index of first occurence of the substring 
console.log(name.indexOf('l')); //index of l in ali
//if no occurance of substring then returns -1
console.log(name.indexOf('k')); //index of k in ali
console.log(name2.indexOf("k"));
console.log("Sensitive cases");
let color = "Yellow";
//toUpperCase( ): returns calling string value into uppercase
console.log(color.toUpperCase());
//toLowerCase( ):
console.log("Lower Case:", color.toLowerCase());
//title case
let personName = "Ayesha khan";
console.log("Title Case:", personName.replace(/\bw/g, c => c.toUpperCase()));
//trim( ): removes white spaces from a stirng
var name1 = "         Welcome     ";
console.log(name1.trim());
// replce( ): replaces the matched substring with the specified string
//removes first occurance of substring
var name2 = "Hello Typescript";
console.log(name2.replace('Type', 'Java'));
console.log(name2.replace('e', 'a'));
//split( ): Split the entire string into multiple pieces depending on the delimeter
let fruits = "Apple Banana Orange";
console.log(fruits.split(' ')); //delemeter is space
console.log(fruits.split(' ', 2)); //delemeter is into values
console.log(fruits.split(' ', 1)); // split into 1 
//sustring( ): it returns a string between the two given indexes.
// this is used to extract portion of string as substring
var str = "Welcome";
console.log(str.substring(0, 3)); //(index, length of last index)
console.log(str.substring(0, 4));
console.log(str.substring(2, 5)); //shows between 2nd index to 4th index
export {};
