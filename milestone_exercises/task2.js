/* TASK 2: Using Python or PHP or Java or Ruby or JavaScript
Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, 
display either “odd” or “even” to the user.
 Hint: how does an even / odd number react differently when divided by 2?
Once you learn functions, revisit this and write this code inside a function.
    Extras:
        1.	If the number is a multiple of 4, print out “divisible by 4”.
Once you learn functions, revisit this and write this code inside a function.
 */

let number = parseInt(prompt('enter number: '));

if (number % 2 === 0) {
    alert('even');
    if (number % 4 === 0) {
        alert('divisible by 4');
    } else {
        alert('not divisible by 4');
    }
} else {
    alert('odd');
}