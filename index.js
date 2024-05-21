/*
Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.
*/
import chalk from "chalk";
let products = [
    {
        name: "Polo_t-shirt",
        price: 2000,
        inventory: {
            stock: 100,
            colorOptions: ["red", "black", "white", "blue"],
        },
    },
    {
        name: "Aramani cap",
        price: 400,
        inventory: {
            stock: 30,
            colorOptions: ["yellow", "red", "blue", "green"],
        },
    },
    {
        name: "iphone 14",
        price: 35000,
        inventory: {
            stock: 50,
            colorOptions: ["navyblue", "red", "purple", "blue"],
        },
    },
];
function changeColor(products, newcolor) {
    if (products.inventory.colorOptions.includes(newcolor)) {
        products.inventory.colorOptions.push(newcolor);
        if (newcolor == "red") {
            products.price *= 1.1;
            console.log(chalk.redBright.bold.italic(`The "${newcolor}" one ${products.name} costs $${products.price.toFixed(2)} `));
            console.log(chalk
                .hex("8A33FF")
                .bold.italic.underline(`The ${newcolor} one  ${products.name} costs 10% more than the ordinary one due to being a premium item.`));
        }
        else if (newcolor == "blue") {
            products.price *= 0.95;
            console.log(chalk.blueBright.bold.italic(`The "${newcolor}" one ${products.name} costs  $${products.price.toFixed(2)} `));
            console.log(chalk.green.bold.underline(`Enjoy 5% off on ${newcolor}  ${products.name}!`));
        }
        else {
            console.log(chalk.magentaBright.bold.italic(`The "${newcolor}" one ${products.name} costs $${products.price.toFixed(2)} `));
        }
    }
    else {
        console.log(chalk.cyanBright.strikethrough(`Color "${newcolor}" is not available for ${products.name}.`));
    }
}
console.log(chalk.redBright.bold.bgWhiteBright("\t\t\t\t\t\tProducts available"));
products.forEach((e) => {
    console.log(chalk.yellowBright("-------------------------"));
    console.log(chalk.redBright(`product name = ${e.name}  `));
    console.log(chalk.hex("FFA533")(`product price = $${e.price}`));
    console.log(chalk.hex("93FF33")(`product stock = ${e.inventory.stock}`));
    console.log(chalk.hex("33FFE6")(`product coloravailable = ${e.inventory.colorOptions}`));
    console.log(chalk.yellowBright("-------------------------"));
    console.log(chalk.cyanBright("------------------------------------------------------------------------------------------------"));
});
console.log(chalk.redBright("------------------------------------------------------------------------------------------------"));
console.log(chalk.bgWhiteBright.cyanBright.bold("\t\t\t\t\t\tHere is your cart list\n"));
changeColor(products[1], "red");
console.log(chalk.whiteBright("------------------------------------------------------------------------------------------------"));
