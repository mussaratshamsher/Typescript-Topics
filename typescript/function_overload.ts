
//Function overloading allows to define multiple function signatures for a single function name. 
//over_Load is rewriting a function with data types of return & parameters
//overload Signatures :order must be most specific to least specific
// first create overload signature then create function for over loading

function  add(param: string, param2: string):string; //option 1
function  add(param: number, param2: number):number; //option 2
function add(param: boolean, param2: boolean):boolean; //option 3

function  add(param: any, param2: any) :any {
    return param + param2
};

console.log(add( 'Ali', 'Ahamd')); //logs option1
console.log(add(4,2)); //logs option 2
console.log(add(true, true)); //logs option3
//other than given 3options , new calling option will through error 


