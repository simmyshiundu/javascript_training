/* TASK 11: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes the date of birth of a person and the program outputs the age in terms of years, months, days 
TODAY.
Once you learn functions, revisit this and write this code inside a function.
 */

// const datetime = require('date-fns');
// alert('current date');
// let today = new Date(); // outputs current date only
// alert(today.toISOString().split('T')[0]);
// let dob = prompt('enter dob yyyy-mm-dd: ');
// dob = new Date(dob);
// alert(dob.toISOString().split('T')[0]);
// let years = today.getFullYear() - dob.getFullYear();
// let months = today.getMonth() - dob.getMonth();
// let days = today.getDate() - dob.getDate();
// if (days < 0) {
//     months--;
//     days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
// }
// if (months < 0) {
//     years--;
//     months += 12;
// }
// alert(`${years} years, ${months} months and ${days} days`);

// function calculateAge(dob) {
//     let today = new Date(); // outputs current date only
//     alert(`Current date: ${today.toISOString().split('T')[0]}`);
//     console.log(`Current date: ${today.toISOString().split('T')[0]}`);
//     dob = new Date(dob);
//     alert(`Date of birth: ${dob.toISOString().split('T')[0]}`);
//     console.log(`Date of birth: ${dob.toISOString().split('T')[0]}`);
//     let years = today.getFullYear() - dob.getFullYear();
//     let months = today.getMonth() - dob.getMonth();
//     let days = today.getDate() - dob.getDate();
//     if (days < 0) {
//         months--;
//         days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//     }
//     if (months < 0) {
//         years--;
//         months += 12;
//     }
//     return `${years} years, ${months} months and ${days} days`;
// }

// let dateOfBirth = prompt('enter dob yyyy-mm-dd: ');
// age = calculateAge(dateOfBirth);
// console.log(age);

// dictionaries are defined by their keys
// strings/arrays are defined by their methods

// program ignores the leap year
let full_birthdate = prompt("Enter your birthdate in the format: YYYY-MM-DD")

let date_parts = full_birthdate.split('-')
console.log(date_parts) // ['1980','10','2']

let birthYear = parseInt(date_parts[0])
let birthMonth = parseInt(date_parts[1])
let birthDate = parseInt(date_parts[2])

let todayDate = 30
let todayMonth = 5
let todayYear = 2025

let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
// let monthDaysLeapYear = [31,29,31,30,31,30,31,31,30,31,30,31]

// 2005-12-25 -> birthday
// 2025-5-12 -> day today
// 12 - 25 = -13

if (birthDate > todayDate) {
    todayMonth-- // previous month
    todayDate += monthDays[(todayMonth - 1 + 12) % 12]
}

let calculatedDay = todayDate - birthDate
let calculatedMonth
let calculatedYear

if (birthMonth > todayMonth) {
    calculatedMonth = 12 - (birthMonth - todayMonth)
    calculatedYear = todayYear - birthYear - 1
} else {
    calculatedMonth = todayMonth - birthMonth
    calculatedYear = todayYear - birthYear
}

console.log(`Age in Years: ${calculatedYear}, Months: ${calculatedMonth}, Days: ${calculatedDay}`)

// date object -> Date()