/* TASK 4: Using Python or PHP or Java or Ruby or JavaScript
Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
Hint: Check if it contains an “@” symbol and “.” symbol.
Once you learn functions, revisit this and write this code inside a function.
 */

// const email = prompt('enter email: ');

// let valid_e;
// if (email.indexOf('@') === -1 && email.indexOf('.') === -1) {
//     valid_e = 'invalid email';
// } else {
//     valid_e = 'valid email';
// }
// alert(valid_e);



// USING A FUNCTION

function findEmail(eml) {
    let validE;
    if (eml.indexOf('@') === -1 && eml.indexOf('.') === -1) {
        validE = 'invalid email';
    } else {
        validE = 'valid email';
    }
    return validE;
}

let email = prompt('enter email: ');
let emailValidity = findEmail(email);
alert(emailValidity);