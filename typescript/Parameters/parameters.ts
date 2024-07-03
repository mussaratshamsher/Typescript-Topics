//parameters
// The variables that are defined when the function is declared are known as parameters.
// parameters are the values or arguments that passed to a function.

//arguments
//The values that are declared within a function when the function is called ,known as an argument.

//Example of param & argument
function addition (parameter1: number, parameter2:number){
    let sum = parameter1 + parameter2
    return sum
}
console.log (addition(5,4)); //5, 4 both numbers are arguments
//different parameters :
// 1. Default Parameter
//when value of param. is assigned at the time of declaring param. is known as default parameter
function defaultParam (num :number = 2, num1: number):number
        {// num is default parameter as value is assigned
    return num+num1
}
defaultParam(2, 8)

//2. optional parameter 
//optional parameters allow you to specify that a function parameter may be omitted when calling the function.
//we denote optional parameters by adding a question mark ( ? ) after the parameter name in the function declaration.
//it is written at last of the parameter
function optionalParameter(name: string, course: string, age? : number):string|number{
    return `${name}, ${course}, ${age}`
}
optionalParameter('hina', 'IT', 20);
optionalParameter('anam', 'Commerce');

function optional(name? : string) {
    console.log(`hello, ${name}`);
}
optional('Anum');

//3. Rest parameter
// this parameter is used when the value of parameter is not known
//expressed using elipses notation (...)
// using this parameter function can take multiple arguments
function myConsolelog (...restParam: any[]){
    return restParam
} //rest param with any type can take all types of data as argument
console.log(myConsolelog(['name', 'address', 'age'])); //Array as argument
console.log(myConsolelog(`enum car{'color': 'gray', 'model': sp20}`));// enum as argument
console.log(myConsolelog({'egg': 2, 'floor': '2cups'}));//object as argument
// implementing for loop using rest parameter with in a function
function implementLoop (...restParameter: any[]) {
    for (let i= 0; i<restParameter.length; i++){
    console.log(restParameter[i])
    }
};
implementLoop(4,5);


