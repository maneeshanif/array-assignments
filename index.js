let products = [
    {
        name: "Poloshirt",
        price: 140,
        inven: {
            stock: 10,
            colorOptions: ["red", "black", "white", "blue", "green"]
        }
    },
    {
        name: "aramani t-shirt",
        price: 400,
        inven: {
            stock: 30,
            colorOptions: ["gray", "halfWhite", "red", "blue", "royalBlack"]
        }
    },
    {
        name: "Gul Ahmed",
        price: 350,
        inven: {
            stock: 50,
            colorOptions: ["navyblue", "red", "purple", "blue", "seagreen"]
        }
    }
];
function changeColor(prod, newcolor) {
    // prod.inven.colorOptions = newcolor
    if (newcolor == "red") {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
export {};
//   // Define a type alias named Product to represent a product
// type Product = {
//     name: string;
//     price: number;
//     inventory: {
//       stock: number;
//       colorOptions: string[];
//     };
//   };
//   // Create an array named products containing at least three product objects
//   let products: Product[] = [
//     {
//       name: "Product 1",
//       price: 100,
//       inventory: {
//         stock: 10,
//         colorOptions: ["red", "blue", "green"],
//       },
//     },
//     {
//       name: "Product 2",
//       price: 200,
//       inventory: {
//         stock: 20,
//         colorOptions: ["yellow", "orange", "purple"],
//       },
//     },
//     {
//       name: "Product 3",
//       price: 300,
//       inventory: {
//         stock: 30,
//         colorOptions: ["pink", "black", "white"],
//       },
//     },
//   ];
//   // Implement a function named changeColor that takes a product object and a new color as input
//   function changeColor(product: Product, newColor: string) {
//     // Update the colorOptions property of the product
//     product.inventory.colorOptions.push(newColor);
//     // Adjust the price based on the new color
//     if (newColor === "red") {
//       product.price *= 1.1; // Increase by 10%
//     } else if (newColor === "blue") {
//       product.price *= 0.95; // Decrease by 5%
//     }
//   }
//   // Display each product's name, price, stock, and available colors
//   function displayProducts() {
//     for (let product of products) {
//       console.log(`Product Name: ${product.name}`);
//       console.log(`Price: ${product.price}`);
//       console.log(`Stock: ${product.inventory.stock}`);
//       console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
//       console.log();
//     }
//   }
//   // Call the changeColor function to update the product details
//   changeColor(products[0], "red");
//   changeColor(products[1], "blue");
//   // Call the displayProducts function to display the product details
//   displayProducts();
