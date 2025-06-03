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
        ans += '<p><a href="/dashboard/new">Add product</a></p>'
    }
    ans += '</nav>'
    return ans
}

const createProduct = (product) => {
    return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            <p class="productSize">Talla: ${product.talla}</p>
            <p><a href="/products/${product._id}">Más detalles...</a></p>
            </div>`
}

const details = (product) => {
    return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <p class="productDescription">${product.descripcion}</p>
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            <p class="productCategory">Categoría: ${product.categoria}</p>
            <p class="productSize">Talla: ${product.talla}</p>
            <p class="productPrice">Precio: ${product.precio}€</p>
            </div>`
}

const mostrarProductos = (products) => {
    return htmlStart+navBar(false)+
    `<div class="contenedor">${products.map(product => createProduct(product)).join("")}</div>`+
    htmlEnd
}

const mostrarDetalle = (product) => {
    return htmlStart + navBar(false) + details(product) + htmlEnd
}

module.exports = {
    mostrarProductos,
    mostrarDetalle
}