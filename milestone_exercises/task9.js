/* TASK 9: Using Python or PHP or Java or Ruby or JavaScript
Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
Example If rows is 5, it should print the following:
*
**
***
****
*****.....
Once you learn functions, revisit this and write this code inside a function.
 */

a = parseInt(prompt('enter number: '));

for (let i = 0; i <= a; i++) {
    alert('*'.repeat(i));
}