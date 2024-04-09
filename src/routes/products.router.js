import {Router} from "express";
import { productManager } from "../app.js";
import { ProductManager } from "../desaf_entregable1.js";
const productsRouter = Router();

productsRouter.get("/", async (req, res)=>{
    try {
        const {limit} = req.query;
        const productos = await productManager.getProduct()

        if(limit){
            const limitedProducts = productos.slice(0, limit)
            return res.json(limitedProducts)
        }

        return res.json(productos)
    } catch (error) {
        console.log(error)
        res.send(`Error al recibir los productos`)
    }
})

productsRouter.get("/:pid", async (req, res)=>{
    const {pid} = req.params;
    try {
        const productos = await productManager.getProductById(pid)
        res.json(productos)
    } catch (error) {
        console.log(error)
        res.json(`Error al intentar recibir el producto con id ${pid}`)
    }
})

productsRouter.post("/", async (req, res)=>{
    try {
        const { id, title, description, price, thumbnail, code, stock } = req.body;
        const response = await productManager.addProduct({ id, title, description, price, thumbnail, code, stock })
        res.json(response)
    } catch (error) {
        console.log(error)
        res.json(`Error al intentar agregar el producto`)
    }
})

productsRouter.put("/:pid", async (req, res)=>{
    const {pid} = req.params;
    try {
        const { id, title, description, price, thumbnail, code, stock } = req.body;
        const response = await productManager.updateProduct(pid, {title, description, price, thumbnail, code, stock })
        res.json(response)

    } catch (error) {
        console.log(error)
        res.json(`Error al intentar editar el producto con id ${pid}`)
    }
})

productsRouter.delete("/:pid", async (req, res)=>{
    const {pid} = req.params;
    try {
        await productManager.deleteProduct(pid)
        res.send(`Producto eliminado correctamente`)

    } catch (error) {
        console.log(error)
        res.json(`Error al intentar eliminar el producto con id ${pid}`)
    }
})

export {productsRouter}