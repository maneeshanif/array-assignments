let products = {
    name: "polotshirt",
    price: 240,
    method: {
        stock: 20,
        colorOptions: ["red", "yellow", "blue", "green"]
    }
};
function changecolor(newcolor) {
    products.method.colorOptions.push(newcolor);
    if (newcolor == "red") {
        products.price += 0.10;
        console.log(products.price);
    }
    else if (newcolor == "blue") {
    }
    else {
        console.log("bhut sasta hn ustad", products.price);
    }
}
changecolor("red");
export {};
