import e from "express";
import ProductManager from "./desaf_entregable1.js"
import express from 'express'

const app = express();
const PORT = 3000;
const p = new ProductManager("./src/data/products.json");

app.get('/products', (req, res) => {
    let productos = p.getProducts();
    let limit = req.query.limit

    if (limit !== undefined) {
        limit = Number(limit)


        if (isNaN(limit)) {
            return res.json({ error: `El limit tiene que ser de tipo number` })
        }

        if (limit <= 0) {
            return res.json({ error: `El limit tiene que ser mayor a 0` })
        }

        if (limit > 11) {
            return res.json({ error: `El limit tiene que ser menor a 11` })
        }

        res.json({ productosLimit: productos.slice(0, limit) })
    }
    res.json({ productosJSON: productos })
})

app.get('/products/:pid', (req, res) => {
    let productos = p.getProducts();
    let pid = req.params.pid

    if (pid !== undefined) {
        pid = Number(pid)


        if (isNaN(pid)) {
            return res.json({ error: `El pid tiene que ser de tipo number` })
        }

        if (pid <= 0) {
            return res.json({ error: `El pid tiene que ser mayor a 0` })
        }

        if (pid > 11) {
            return res.json({ error: `El pid tiene que ser menor o igual a 11` })
        }
        const product = productos.find(producto => producto.id === pid);
        res.json({productIdJson: product})
    }
    
    
})

app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});
