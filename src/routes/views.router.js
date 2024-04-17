import {Router} from "express";
import { ProductManager } from "../dao/desaf_entregable1.js";
const router = Router();

router.get("/", (req, res)=>{
    const p = new ProductManager();
    const productos = p.getProduct();
    return res.render("home", {productos, styles:"styles.css"})
})

router.get("/realTimeProducts", (req, res)=>{
    return res.render("realTimeProducts", {productos, styles:"styles.css"})
})



export default router;