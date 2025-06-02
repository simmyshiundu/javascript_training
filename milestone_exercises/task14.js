/* TASK 14: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or 
otherwise display an error “invalid character entered” and tell the user to re-enter the inputs.
Once you learn functions, revisit this and write this code inside a function.
 */

// while (true) {
//     try {
//         let a = parseFloat(prompt('enter first number: '));
//         let b = parseFloat(prompt('enter second number: '));
//         let sum = a + b;
//         alert(sum);
//     } catch (error) {
//         alert('invalid character entered');
//     }
// }

// function add_numbers(num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {   // isNan - checks that value is not a number
//         return ("Invalid inputs")       // use return in functions NOT console.log() - GOOD PRACTICE
//     } else {
//         return Number(num1) + Number(num2)
//     }
// }

// let num1 = prompt("Enter num1")
// let num2 = prompt("Enter num2")

// add_values = add_numbers(num1, num2)
// console.log(add_values)

// console.log(isNaN(3)) // false

let char = 'c'
console.log(Number(char)) // NaN - not a number

// function add_numbers(value1, value2) {
//     let type1 = Number(value1)
//     let type2 = Number(value2)
//     if (type1 == NaN || type2 == NaN) {
//         return "Invalid inputs"
//     } else {
//         return type1 + type2
//     }
// }

// function add_numbers(value1, value2) {
//     let type1 = Number(value1)
//     let type2 = Number(value2)
//     if (type1 !== type1 || type2 !== type2) {
//         return "Invalid inputs"
//     } else {
//         return type1 + type2
//     }
// }

// function add_numbers(value1, value2) {
//     let type1 = Number(value1)
//     let type2 = Number(value2)
//     if (type1 !== type2) {
//         return "Invalid inputs"
//     } else {
//         return type1 + type2
//     }
// }

function add_numbers(value1, value2) {
    let type1 = Number(value1)
    let type2 = Number(value2)
    // type1 = NaN
    if (typeof(type1) !== typeof(type2)) {
        return "Invalid inputs"
    } else {
        return type1 + type2
    }
}

let num1 = prompt("Enter number")
let num2 = prompt("Enter number 2")

add_values = add_numbers(num1, num2)
console.log(add_values)
