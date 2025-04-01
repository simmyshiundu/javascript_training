/* TASK 7: Using Python or PHP or Java or Ruby or JavaScript
Write a program that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
Once you learn functions, revisit this and write this code inside a function.
 */


// USING A FUNCTION

function studentGrade(studentMarks) {
    let grade;
    if (studentMarks > 79 && studentMarks <= 100) {
        grade = 'A';
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        grade = 'B';
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        grade = 'C';
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        grade = 'D';
    } else if (studentMarks < 40) {
        grade = 'E';
    } else {
        grade = 'Invalid student marks';
    }
    return grade;
}

const studMarks = parseInt(prompt('Enter student marks: '));
const studGrade = studentGrade(studMarks);
alert(studGrade);