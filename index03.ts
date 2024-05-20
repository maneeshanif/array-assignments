// Part 3: Array with Types and Indexing - Employee Salaries
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary

type Employee ={
    name:string,
    hoursWorked:number,
    hourlyRate :number,
    salary :number,
    }

    let employees:Employee[] = [
        {
        name:"anees",
        hoursWorked:25,
        hourlyRate: 25,
        salary: 10000
        },
        {
            name:"habib",
            hoursWorked:30,
            hourlyRate: 35,
            salary: 12000
        },{
            name:"faik",
            hoursWorked:15,
            hourlyRate: 15,
            salary: 8000
        }
]
  let calculateSalary = () =>{
 
   
  }
  calculateSalary()