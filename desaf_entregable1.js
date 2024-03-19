const fs = require("fs")

class ProductManager {
    #products;
    #path
    static idProducto = 0;

    constructor() {
        this.#path = "./data/products.json";
        this.#products = this.#leerProductosInFile();
    }

    asignarIdProduct() {
        let id = 1;
        if (this.#products.length != 0)
            id = this.#products[this.#products.length - 1].id + 1;
        return id;
    }

    #leerProductosInFile() {
        try {
            if (fs.existsSync(this.#path)) {
                return JSON.parse(fs.readFileSync(this.#path, "utf-8"));
            }
            return [];
        } catch (error) {
            console.log(`Ocurrio un error al momento de leer el archivo de productos, ${error}`)
        }
    }

    #guardarArch() {
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products))
        } catch (error) {
            console.log(`Ha ocurrido un error al momento de guardar el archivo de producto, ${error}`)
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return "Todos los parametros son requeridos: title, description, price, thumbnail, code, stock"
        }
        const codigoRepetido = this.#products.some(p => p.code == code);
        if (codigoRepetido) {
            return `El codigo ${code} ya esta repetido en otro producto`
        }

        ProductManager.idProducto = ProductManager.idProducto + 1
        const id = this.asignarIdProduct();

        const nuevoProducto = {
            id: id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.#products.push(nuevoProducto);
        this.#guardarArch();
        return `Producto agregado exitosamente `
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        const producto = this.#products.find(p => p.id == id)
        if (producto) {
            return producto
        }
        else {
            return "Not found"
        }
    }

    updateProduct(id, objetoUpdate) {
        let msg = `El producto con id ${id} no existe`
        const index = this.#products.findIndex(p => p.id === id);
        if (index !== -1) {
            const { id, ...rest } = objetoUpdate;
            this.#products[index] = { ...this.#products[index], ...rest }
            this.#guardarArch();
            msg = `Producto actualizado`;
        }
        return msg;
    }

    deleteProduct(id) {
        let msg = `El producto con id ${id} no existe`
        const index = this.#products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.#products = this.#products.filter(p => p.id !== id);
            this.#guardarArch();
            msg = `Producto elminado`
        }
        return msg;

    }
}

module.exports = ProductManager;