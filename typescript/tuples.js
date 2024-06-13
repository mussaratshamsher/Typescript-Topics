"use strict";
// typed Array
// predefined length
// set type of each index
// value can be replaced
// new index value can only be added or deleted if readonly is assigned as a data type?
//Array methods can be implemented on tuple array
//array dataType is separated by (|)union but tuple array data type is separated using ,
//elments can be pushed or pop 
Object.defineProperty(exports, "__esModule", { value: true });
//tuple Array
let array = ['rishi', 45, true, 7, 'onion']; //can't pass next value as shows error
console.log('origional', 'array');
//value can only be added by appending type? (optional) with in the same tupled array 
let data = ['hina', 7, true];
data = ['bia', 6, false, 9];
console.log(data);
//When used with tuple types, `readonly` ensures that the elements in the tuple array cannot be reassigned
// or modified once they have been defined.
let readonlyTuple = ['ghi', 7, 8, true]; //throws error if pass next element
//readonlyTuple.push(myName)  throws error as defined readonly
