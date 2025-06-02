/* TASK 8: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes as input, the speed of a car e.g. 80. If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total 
number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function 
should print: “License suspended”.
Once you learn functions, revisit this and write this code inside a function.
 */

// let speed = parseInt(prompt('enter speed: '));
// const speed_limit = 70;

// if (speed < speed_limit) {
//     alert('Ok');
// } else {
//     let demerit_points = (speed - speed_limit) / 5;
//     alert(`demerit points: ${demerit_points}`);
//     if (demerit_points > 12) {
//         alert('License suspended');
//     }
// }


// USING A FUNCTION

// Math.floor()
// Math.ceil()

function check_speed(speed) {
    let speed_limit = 70
    if (speed <= 70) {
        return "Ok"
    }

    let overspeed = speed - speed_limit
    let points = (overspeed - (overspeed % 5) / 5)
    // (12 - (12 % 5) / 5)
    // 12 - 2 = 10 / 5 = 2

    if (overspeed % 5 !== 0) {
        points += 1
    }
    if (points > 12) {
        return "License suspended"
    } else {
        return "Points", points
    }
}

my_speed = parseInt(prompt("Enter speed: "))
console.log(check_speed(my_speed))

// function checkSpeedLimit(sp) {
//     const speedLimit = 70;
//     let msg;
//     if (sp < speedLimit) {
//         msg = 'Ok';
//     } else {
//         const demeritPoints = (sp - speedLimit) / 5;
//         msg = `demerit points: ${demeritPoints}`;
//         if (demeritPoints > 12) {
//             msg = 'License suspended';
//         }
//     }
//     return msg;
// }

// let speed = parseInt(prompt('enter speed: '));
// let message = checkSpeedLimit(speed);
// alert(message);
