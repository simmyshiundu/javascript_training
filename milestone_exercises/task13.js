/* TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” and password is “Admin@123”, if so then print “Login is Successful” and if not print “Invalid username or password”. ONLY accept 3 tries after which it notifies you that you have been blocked.
Once you learn functions, revisit this and write this code inside a function.
 */

let tries = 3;

for (let t = 0; t < tries; t++) {
    let email = prompt('enter email: ');
    let password = prompt('enter password: ');

    if (email === "admin@mail.com" && password === "Admin@123") {
        alert("Login is Successful");
        break;
    } else {
        let remaining_tries = tries - (t + 1);

        if (remaining_tries > 0) {
            alert(`Invalid username or password, you have ${remaining_tries} tries left`);
        } else {
            alert("You have been blocked");
        }
    }
}
