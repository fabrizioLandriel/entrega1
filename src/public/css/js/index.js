const socket = io();
socket.on("productos", productos=>{
    const tbody = document.getElementById("productos-tbody")
    tbody.innerHTML= "";

    productos.forEach(producto => {
        const row = tbody.insertRow();
        row.innerHTML=`
        <td>${producto.id}</td>
        <td>${producto.title}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
        <td>${producto.thumbnail}</td>
        <td>${producto.code}</td>
        <td>${producto.stock}</td>
        `;
    });
})

const formulario = document.getElementById("producto-form")
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("description").value;
    const precio = document.getElementById("precio").value;
    const thumbnail = document.getElementById("thumbnail").value;
    const codigo = document.getElementById("code").value;
    const stock = document.getElementById("stock").value;

    const producto = {
        title:titulo,
        descripcion:descripcion,
        precio:precio,
        thumbnail:thumbnail,
        codigo:codigo,
        stock:stock
    }

    socket.emit("agregarProducto", producto)
    formulario.appendChild(producto)
})
