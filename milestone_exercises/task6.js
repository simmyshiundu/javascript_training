/* TASK 6:Using Python or PHP or Java or Ruby or JavaScript
Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against 
“admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.
Once you learn functions, revisit this and write this code inside a function.
 */

let attempts = 4;

for (let p = 0; p < attempts; p++) {
    const correct_password = "admin@123";
    const password = prompt("enter password: ");
    if (password === correct_password) {
        alert("access is granted");
        break;
    } else {
        const remaining_attempts = attempts - (p + 1);
        if (remaining_attempts > 0) {
            alert(`wrong password, you have ${remaining_attempts} attempts left`);
        } else {
            alert("account is blocked");
        }
    }
}

// function enterPassword(password) {
//     let attempts = 4;

//     for (let p = 0; p < attempts; p++) {
//         const correct_password = "admin@123";
//         // const password = prompt("enter password: ");
//         if (password === correct_password) {
//             alert("access is granted");
//             break;
//         } else {
//             const remaining_attempts = attempts - (p + 1);
//             if (remaining_attempts > 0) {
//                 alert(`wrong password, you have ${remaining_attempts} attempts left`);
//             } else {
//                 alert("account is blocked");
//             }
//         }
//     }
// }

// let password = prompt("enter password: ");
// enterPassword(password);