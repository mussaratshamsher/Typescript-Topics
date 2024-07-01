//Exporting Functions
// Addition
export function addition(num1: number, num2: number):string {
    let result = num1 + num2
    return `Addition:${result}`;
}  
// Subtraction
export function subt(num1: number , num2: number):string {
    let result = num1 - num2
    return `Subtraction: ${result}`
}
    // Multiplication
export function multi(num1: number , num2: number):string {
    return `Multiplication: num1 * mum2`
}
// Division (/)
export function divide(num1: number , num2: number):string {
 let result = num1 / num2
    return `Division: ${result}`
}
// Modulus (%)
export function modulus(num1: number, num2: number):string {
    let result = num1 % num2
    return `Modulus: ${result}`
}
// Exponent (**)
export function exponent(num1 :number, num2: number):string {
    let result = num1 ** num2
    return `Exponent: ${result}`
}


