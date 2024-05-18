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
type Student ={
    name:string,
    grades:number[]
}
let students:Student[]=[{
    name:"ali",
    grades:[70,80,90]
},
{
    name:"ahmed",
    grades:[50,30,70]

},{
    name:"hamza",
    grades:[90,80,50]
}]

    
 