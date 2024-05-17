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
type Product ={
    name: "string",
    price:"number",
    inventory:{
        stock:"number",
        colorOptions:["red","green","blue","yellow","orange"];
    }
}
let products:Product[] =[
    {
     name:"Polo shirt",
     price: 140,
     inventory:{
        stock:10,
        colorOptions:["red","black","white","blue","green"]
     }
     },
     {
        name: "aramani t-shirt";
        price:400,
        inventory:{
            stock:30,
            colorsOptions:["gray","halfWhite","red","blue","royalBlack"]
        }

     }
    ]
