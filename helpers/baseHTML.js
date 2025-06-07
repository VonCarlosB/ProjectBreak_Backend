const categories = ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]

const htmlStart = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Clothing shop</title>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>`

const htmlEnd = `</body></html>`

const navBar = (admin) => {
    let ans = `
        <nav class="navBar">
            ${categories.map(category => `<p>${category}</p>`).join("")}
        
    `
    if(admin){
        ans += '<p><a href="/dashboard/new">Añadir producto</a></p>'
    }
    ans += '</nav>'
    return ans
}

const showProduct = (product) => {
    return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <div class="imageContainer">
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            </div>
            <p class="productSize">Talla: ${product.talla}</p>
            <p><a href="/products/${product._id}">Más detalles...</a></p>
            </div>`
}

const details = (product) => {
    return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <p class="productDescription">${product.descripcion}</p>
            <div class="imageContainer">
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            </div>
            <p class="productCategory">Categoría: ${product.categoria}</p>
            <p class="productSize">Talla: ${product.talla}</p>
            <p class="productPrice">Precio: ${product.precio}€</p>
            </div>`
}

const form = () => {
    return `<form action="/dashboard" method="post" enctype="multipart/form-data">
            <label for="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre" required>
            <br>
            <label for="descripcion">Descripción: </label>
            <textarea rows="5" cols="50" name="descripcion" id="descripcion" required></textarea>
            <label for="imagen">Imagen: </label>
            <input type="file" name="imagen" id="imagen" accept="image/*" required>
            <br>
            <label for="categoria">Categoría: </label>
            <select name="categoria" id="categoria" required>
                <option value="Camisetas">Camisetas</option>
                <option value="Pantalones">Pantalones</option>
                <option value="Zapatos">Zapatos</option>
                <option value="Accesorios">Accesorios</option>
            </select>
            <br>
            <label for="talla">Talla: </label>
            <select name="talla" id="talla" required>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
            <br>
            <label for="precio">Precio (€): </label>
            <input type="number" name="precio" id="precio" required value="10">
            <br>
            <button type="submit">Crear</button>
        </form>`
}

const mostrarProductos = (products) => {
    return htmlStart+navBar(false)+
    `<div class="contenedor">${products.map(product => showProduct(product)).join("")}</div>`+
    htmlEnd
}

const mostrarDetalle = (product) => {
    return htmlStart + navBar(true) + `<div class="contenedor">${details(product)}</div>` + htmlEnd
}

const mostrarDashboard = (products) => {
    return htmlStart+navBar(true)+
    `<div class="contenedor">${products.map(product => showProduct(product)).join("")}</div>`+
    htmlEnd
}

const createForm = () => {
    return htmlStart + navBar(true) + form() + htmlEnd;
}

module.exports = {
    mostrarProductos,
    mostrarDetalle,
    mostrarDashboard,
    createForm
}