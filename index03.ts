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
import chalk from "chalk";
type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};

let employees: Employee[] = [
  {
    name: "anees",
    hoursWorked: 25,
    hourlyRate: 25,
    salary: 0,
  },
  {
    name: "habib",
    hoursWorked: 30,
    hourlyRate: 35,
    salary: 0,
  },
  {
    name: "faik",
    hoursWorked: 15,
    hourlyRate: 20,
    salary: 0,
  },
  {
    name: "uzair",
    hoursWorked: 10,
    hourlyRate: 23,
    salary: 0,
  },
];
let calculateSalary = (emp: Employee) => {
  let baseSalary = emp.hourlyRate * emp.hoursWorked;
  if (emp.hoursWorked >= 20) {
    console.log(
      chalk.redBright(
        `\n\t${emp.name} , your  initial salary is = $${baseSalary.toFixed(
          2
        )}\n`
      )
    );
    let bonusSalary = (baseSalary *= 1.1);
    console.log(
      chalk
        .hex("FFA533")
        .underline.italic(
          `\tHurray!! ${emp.name} , your hard work paid off! you got 10% bonus for your efforts\n`
        )
    );

    console.log(
      chalk.cyanBright(
        `\t${emp.name} , your new salary with bonus is = $${bonusSalary.toFixed(
          2
        )} `
      )
    );
  } else {
    console.log(
      chalk.hex("93FF33")(
        `\n\t${emp.name} , your salary is  = $${baseSalary}\n`
      )
    );
    console.log(
      chalk.yellowBright(`\n\tIf you worked hard, you also got a bonus.\n`)
    );
  }
};
console.log(
  chalk.magentaBright.bgWhiteBright.bold(
    "\t\t\t\t\t\t employe salaries sheet\n\n"
  )
);
console.log(
  chalk.redBright(
    "------------------------------------------------------------------------------------------------------------------------------"
  )
);

calculateSalary(employees[3]); //  in this line we give the obj name and index number as an argument
console.log(
  chalk.hex("FFA533")(
    "------------------------------------------------------------------------------------------------------------------------------"
  )
);
