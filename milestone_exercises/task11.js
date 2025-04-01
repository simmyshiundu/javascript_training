/* TASK 11: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes the date of birth of a person and the program outputs the age in terms of years, months, days 
TODAY.
Once you learn functions, revisit this and write this code inside a function.
 */

alert('current date');
let today = new Date(); // outputs current date only
alert(today.toISOString().split('T')[0]);
let dob = prompt('enter dob yyyy-mm-dd: ');
dob = new Date(dob);
alert(dob.toISOString().split('T')[0]);
let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate();
if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
}
if (months < 0) {
    years--;
    months += 12;
}
alert(`${years} years, ${months} months and ${days} days`);