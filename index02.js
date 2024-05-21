/*
Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and logic to
manage student grades effectively.
1. Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.

2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade. */
import chalk from "chalk";
let students = [
    {
        name: "ali",
        grades: [70, 80, 90],
    },
    {
        name: "ahmed",
        grades: [50, 30, 70],
    },
    {
        name: "hamza",
        grades: [90, 80, 50],
    },
];
function calculateAverageGrade(grade) {
    let total = 0;
    grade.map((e) => {
        total += e;
    });
    return total / grade.length;
}
//   let average = calculateAverageGrade(students[0].grades)
//   console.log(average);
console.log(chalk.redBright("--------------------------------------------------------------------------------------------------------------------------------"));
console.log(chalk.blueBright.bgWhite.bold("\t\t\t\t\t\t\tStudent Grades"));
students.forEach((obj) => {
    console.log(chalk.hex("33FFE6")(`\n\n\t\t\t\t\tAverage Grade for Student ${obj.name} is:-  ${calculateAverageGrade(obj.grades).toFixed(2)}`));
});
console.log(chalk.hex("FFA533")("\n--------------------------------------------------------------------------------------------------------------------------------"));
