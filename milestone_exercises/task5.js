/* TASK 5: Using Python or PHP or Java or Ruby or JavaScript
Implement a program that takes 3 users’ inputs from the terminal or the Browser, and stores them in three variables. 
Return the largest of the three. Do this without using the inbuilt max () function!
The goal of this exercise is to think about some internals that programs normally take care of for us. 
 */

// let a = parseInt(prompt('enter first number: '));
// let b = parseInt(prompt('enter second number: '));
// let c = parseInt(prompt('enter third number: '));

// if (a > b && a > c) {
//     alert(`${a} is the largest of the three`);
// } else if (b > a && b > c) {
//     alert(`${b} is the largest of the three`);
// } else {
//     alert(`${c} is the largest of the three`);
// }

// USING A FUNCTION

function findLargestNum(numA, numB, numC) {
    let num;
    if (numA > numB && numA > numC) {
        num = `${numA} is the largest of the three numbers`;
    } else if (numB > numA && numB > numC) {
        num = `${numB} is the largest of the three numbers`;
    } else {
        num = `${numC} is the largest of the three numbers`;
    }
    return num;
}

let a = parseInt(prompt('enter first number: '));
let b = parseInt(prompt('enter second number: '));
let c = parseInt(prompt('enter third number: '));

let number = findLargestNum(a, b, c);
alert(number);