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
            console.log(`The "${newcolor}" one ${products.name} costs ${products.price.toFixed(2)} `);
            console.log(`The ${newcolor} one ${products.name} costs 10% more than the ordinary one due to being a premium item.`);
        }
        else if (newcolor == "blue") {
            products.price *= 0.95;
            console.log(`The "${newcolor}" one ${products.name} costs ${products.price.toFixed(2)} `);
            console.log(`Enjoy 5% off on ${newcolor} ${products.name}!`);
        }
        else {
            console.log(`The "${newcolor}" one ${products.name} costs ${products.price.toFixed(2)} `);
        }
    }
    else {
        console.log(`Color "${newcolor}" is not available for ${products.name}.`);
    }
}
console.log("\t\t\t\t\t\tProducts available");
products.forEach((e) => {
    console.log("-------------------------");
    console.log(`product name = ${e.name}  `);
    console.log(`product price = ${e.price}`);
    console.log(`product stock = ${e.inventory.stock}`);
    console.log(`product coloravailable = ${e.inventory.colorOptions}`);
    console.log("-------------------------");
    console.log("------------------------------------------------------------------------------------------------");
});
console.log("------------------------------------------------------------------------------------------------");
console.log("\t\t\t\t\t\tHere is your cart list\n");
changeColor(products[2], "blue");
export {};
