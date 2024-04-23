import express from "express"
import { Server} from "socket.io"
import { engine } from "express-handlebars"
import __dirname from "./utils.js";
import { ProductManager } from "./dao/desaf_entregable1.js";
import { productsRouter } from "./routes/products.router.js";
import { CartManager } from "./dao/cartManager.js";
import { cartsRouter } from "./routes/carts.router.js";
import views from "./routes/views.router.js";

const app = express();
const PORT = 3000;

const p = new ProductManager();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use("/", views)
app.use("/products", productsRouter)
app.use("/carts", cartsRouter)

const expressSv = app.listen(PORT, (req, res)=>{
    console.log(`Server arriba en puerto ${PORT}`)
})

const socketSv = new Server (expressSv);

socketSv.on("connection", socket=>{
    const productos = p.getProduct();
    socket.emit("productos", productos )

    socket.on("agregarProducto", producto=>{
        const result =  p.addProduct(producto)
    })
})