/* TASK 2: Using Python or PHP or Java or Ruby or JavaScript
Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, 
display either “odd” or “even” to the user.
 Hint: how does an even / odd number react differently when divided by 2?
Once you learn functions, revisit this and write this code inside a function.
    Extras:
        1.	If the number is a multiple of 4, print out “divisible by 4”.
Once you learn functions, revisit this and write this code inside a function.
 */

// let number = parseInt(prompt('enter number: '));

// if (number % 2 === 0) {
//     alert('even');
//     if (number % 4 === 0) {
//         alert('divisible by 4');
//     } else {
//         alert('not divisible by 4');
//     }
// } else {
//     alert('odd');
// }


// USING A FUNCTION

function divTestBy4(num) {
    let div4;
    if (num % 2 === 0) {
        div4 = 'even';
        if (num % 4 === 0) {
            div4 = 'divisible by 4';
        } else {
            div4 = 'not divisible by 4';
        }
    } else {
        div4 = 'odd';
    }
    return div4;
}

let number = parseInt(prompt('enter number: '));
let divisibilityTestBy4 = divTestBy4(number);
alert(divisibilityTestBy4);