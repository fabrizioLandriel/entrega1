import express from "express"
import { ProductManager} from "./desaf_entregable1.js"
import { productsRouter } from "./routes/products.router.js";
import { CartManager } from "./cartManager.js";
import { cartsRouter } from "./routes/carts.router.js";


const app = express();
app.use(express.json())
const PORT = 3000;

export const productManager = new ProductManager;
export const cartManager = new CartManager;

app.use("/products", productsRouter)
app.use("/carts", cartsRouter)

app.listen(PORT, (req, res)=>{
    console.log(`Server arriba en puerto ${PORT}`)
})