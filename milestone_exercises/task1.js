/* TASK 1: Using Python or PHP or Java or Ruby or JavaScript
Write a program that prompts the user to enter the base and height of a triangle and returns its area.
Once you learn functions, revisit this and write this code inside a function.
 */

// base = parseFloat(prompt('base: '));
// height = parseFloat(prompt('height: '));
// area_of_triangle = 0.5 * base * height;
// alert(`area of triangle: ${area_of_triangle}`);


// USING A FUNCTION

function calcAreaTriangle(b, h) {
    let aOfTriangle = 0.5 * b * h;
    return aOfTriangle;
}

let base = parseFloat(prompt('base: '));
let height = parseFloat(prompt('height: '));
let areaOfTriangle = calcAreaTriangle(base, height);
alert(`area of triangle: ${areaOfTriangle}`);