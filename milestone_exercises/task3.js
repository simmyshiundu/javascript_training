/* TASK 3: Using Python or PHP or Java or Ruby or JavaScript
Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it 
starts with +254.. or 07.. or 7… or 254.. or 01... or 1.. Convert the number to start with +254… 
e.g., if a user enters “0712345678”, the program should display “+254712345678”
e.g., if a user enters “0112345678”, the program should display “+254112345678”
e.g., if a user enters “712345678”, the program should display “+254712345678”
Once you learn functions, revisit this and write this code inside a function.
 */


// USING A FUNCTION

function phoneNumber(phone_number) {
    let valid_p;
    if (phone_number.startsWith('+254') && phone_number.length === 13) {
        valid_p = phone_number;
    } else if (phone_number.startsWith('07') && phone_number.length === 10) {
        valid_p = '+254' + phone_number.substring(1);
    } else if (phone_number.startsWith('7') && phone_number.length === 9) {
        valid_p = '+254' + phone_number;
    } else if (phone_number.startsWith('254') && phone_number.length === 12) {
        valid_p = '+' + phone_number;
    } else if (phone_number.startsWith('01') && phone_number.length === 10) {
        valid_p = '+254' + phone_number.substring(1);
    } else if (phone_number.startsWith('1') && phone_number.length === 9) {
        valid_p = '+254' + phone_number;
    } else {
        valid_p = 'invalid phone number';
    }
    return valid_p;
}

let phone_no = prompt('enter phone number: ');
let phone_n = phoneNumber(phone_no);
alert(phone_n);