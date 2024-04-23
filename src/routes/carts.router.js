import {Router} from "express"
import { CartManager } from "../dao/cartManager.js";

const cartManager = new CartManager();
export const cartsRouter = Router();

cartsRouter.post("/", async (req, res)=>{
    try {
        const response = await cartManager.newCart();
        res.json(response)
    } catch (error) {
        res.send("Error al crear carrito")
    }
})

cartsRouter.get("/:cid", async (req, res)=>{
    const {cid} = req.params;
    try {
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch (error) {
        res.send("Error al intentar enviar los productos del carrito")
    }
})

cartsRouter.post("/:cid/products/:pid", async (req, res)=>{
    const {cid, pid} = req.params;
    try {
        await cartManager.addProductToCart(cid, pid)
        res.send("Producto agregado exitosamente")
    } catch (error) {
        res.send("Error al intentar guardar producto en el carrito")
    }
})