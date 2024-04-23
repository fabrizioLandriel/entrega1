import {Router} from "express";
import { ProductManager } from "../dao/desaf_entregable1.js";
const router = Router();
router.get("/", async (req, res)=>{
    const p = new ProductManager();
    const productos = await p.getProduct();
    res.render("home", {productos, styles:"styles.css"})
})

router.get("/realTimeProducts", (req, res)=>{
    return res.render("realTimeProducts",)
})

export default router;