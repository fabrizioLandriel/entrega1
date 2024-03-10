const ProductManager = require("./desaf_entregable1");

let producto = new ProductManager();


console.log(producto.addProduct("Pc gamer", "Pc gamer, rtx 3090, 1gb hdd, 16gb ram, 700w bronze plus", 2200000, "https://image.png", 24, 16))
console.log(producto.addProduct("Ipad", "Ipad Pro", 500000, "https://image.png2", 7, 158))
console.log(producto.getProducts());

console.log("******************************************************")

console.log(producto.getProductById(2)); //puse el Id 2 para que me muestre el obj del Ipad y funciono, eso quiere decir que el metodo es 
                                         //funcional y anda correctamente.
                                         
console.log("******************************************************")
console.log(`Aqui los productos: ${producto.getProducts()}`);
