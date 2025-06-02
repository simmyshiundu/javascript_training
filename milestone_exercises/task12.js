/* TASK 12: Using Python or PHP or Java or Ruby or JavaScript
Write a program that prints the largest of 4 inputs taken as input from a user.
Once you learn functions, revisit this and write this code inside a function.
 */

// let a = parseInt(prompt('enter first number: '));
// let b = parseInt(prompt('enter second number: '));
// let c = parseInt(prompt('enter third number: '));
// let d = parseInt(prompt('enter fourth number: '));

// if (a > b && a > c && a > d) {
//     alert(`${a} is the largest of the four numbers`);
// } else if (b > a && b > c && b > d) {
//     alert(`${b} is the largest of the four numbers`);
// } else if (c > a && c > b && c > d) {
//     alert(`${c} is the largest of the four numbers`);
// } else {
//     alert(`${d} is the largest of the four numbers`);
// }

function findLargestNumber(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return `${a} is the largest of the four numbers`;
    } else if (b > a && b > c && b > d) {
        return `${b} is the largest of the four numbers`;
    } else if (c > a && c > b && c > d) {
        return `${c} is the largest of the four numbers`;
    } else {
        return `${d} is the largest of the four numbers`;
    }
}

let a = parseInt(prompt('enter first number: '));
let b = parseInt(prompt('enter second number: '));
let c = parseInt(prompt('enter third number: '));
let d = parseInt(prompt('enter fourth number: '));

alert(findLargestNumber(a, b, c, d));
console.log(findLargestNumber(a, b, c, d));
