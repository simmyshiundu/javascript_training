/* TASK 14: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or 
otherwise display an error “invalid character entered” and tell the user to re-enter the inputs.
Once you learn functions, revisit this and write this code inside a function.
 */

while (true) {
    try {
        let a = parseFloat(prompt('enter first number: '));
        let b = parseFloat(prompt('enter second number: '));
        let sum = a + b;
        alert(sum);
    } catch (error) {
        alert('invalid character entered');
    }
}