import chalk from "chalk";
Question: 1;
console.log(chalk.redBright("\t\t\t\t\tQuestion:1\n"));

//   Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".

let fruits: string[] = ["apple", "banana", "mango", "orange"];
for (const i of fruits) {
  console.log(i);
}

Question: 2;
console.log(chalk.hex("93FF33")("\t\t\t\t\tQuestion:2\n"));

//   Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.

let numbers: number[] = [10, 20, 30, 40];
numbers.forEach((e) => console.log(e));

Question: 3;
console.log(chalk.hex("FFA533")("\t\t\t\t\tQuestion:3\n"));

//   Access the third element of the fruits array and assign it to a
// variable named thirdFruit.

let thirdFruit = fruits[2];
console.log(thirdFruit);
console.log("\n");

Question: 4;
console.log(chalk.hex("33FFE6")("\t\t\t\t\tQuestion:4\n"));

// Change the second element of the numbers array to 25.
numbers[1] = 25;
console.log(numbers);
console.log("\n");
Question: 5;
console.log(chalk.hex("33FFE6")("\t\t\t\t\tQuestion:5\n"));

// Add the element "grape" to the end of the fruits array using the
fruits.push("grape");
console.log(fruits);
console.log("\n");
Question: 6;
console.log(chalk.hex("93FF33")("\t\t\t\t\tQuestion:6\n"));

//   Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
let lastFruit = fruits.pop();
console.log(lastFruit, "6");
console.log("\n");
// console.log(fruits,"q6");  its is just  for checking purpose to see weather the new arr is change after using method

Question: 7;
console.log(chalk.hex("FFA533")("\t\t\t\t\tQuestion:7\n"));

//   Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log("\n");
// console.log(fruits,"q7"); its just for checking for original array

Question: 8;
console.log(chalk.redBright("\t\t\t\t\tQuestion:8\n"));

// Add the element "kiwi" to the beginning of the fruits array
// using the method.
fruits.unshift("kiwi");
console.log(fruits);
console.log("\n");
Question: 9;
console.log(chalk.hex("33FFE6")("\t\t\t\t\tQuestion:9\n"));

//   Remove 2 elements from the fruits array starting from index 1
// using the method.
fruits.splice(1, 2);
console.log(fruits, "q9");
console.log("\n");
Question: 10;
console.log(chalk.hex("93FF33")("\t\t\t\t\tQuestion:10\n"));

//   Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits, "q10");
console.log("\n");
Question: 11;
console.log(chalk.hex("FFA533")("\t\t\t\t\tQuestion:11\n"));

//   Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
console.log("\n");
Question: 12;
console.log(chalk.redBright("\t\t\t\t\tQuestion:12\n"));

//    Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
let lastTwoFruits = fruits.slice(2);
console.log(lastTwoFruits);
