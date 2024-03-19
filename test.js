const ProductManager = require("./desaf_entregable1.js")
const producto = new ProductManager;

// console.log(producto.addProduct("Celular Samsung", "A 54", 14000000, "https://imagenes/a54", 100, 30))
// console.log(producto.addProduct("Celular Iphone", "15 Plus", 2000000, "https://imagenes/iphone_15", 101, 20))
// console.log(producto.addProduct("Notebook", "Notebook Gamer. 19pulgadas, rtx 3090, ssd1tb, 16gb ram", 4000000, "https://imagenes/notebook_gamer", 102, 10))
// console.log(producto.addProduct("Teclado Mecanico", "Kumara k552", 90000, "https://imagenes/kumara_k552", 103, 48))

// console.log(producto.deleteProduct(3))

let productoActualizar = {
    id:4,
    title: "Mouse HyperX",
    description: "HyperX 3 Series Black",
    price: 80000,
    thumbnail: "https://imagenes/HyperX_3_Series_Black",
    code: 104,
    stock: 27
}

console.log(producto.updateProduct(4, productoActualizar));