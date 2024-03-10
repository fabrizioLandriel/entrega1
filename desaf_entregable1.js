class ProductManager {

    #products; 
    static idProducto = 0;
    
    constructor (){
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail ||  !code || !stock){ //validacion 
            return "Todos los campos son obligatorios"
        }

        let codeRepetido = this.products.some( p => p.code == code );
            if (codeRepetido){
                return `El codigo ${code}esta repetido`
            }

        ProductManager.idProducto = ProductManager.idProducto + 1
        const id = ProductManager.idProducto;

        const nuevoProducto = {
            id:id,
            title:title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        this.products.push(nuevoProducto);
            return "Producto agregado";
    }

    getProducts(){
        return this.products;
    }

    getProductById (id){ 
        let productoEncontrado = this.products.find( p => p.id == id); //??? id?? de donde sale??
            if(productoEncontrado){
                return productoEncontrado
            }
            else {
                return "Not found"
            }
    }

}

module.exports = ProductManager;