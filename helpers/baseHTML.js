function htmlStart(){
    return `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Clothing shop</title>
            <link rel="stylesheet" href="../public/styles.css">
        </head>
        <body>`
}

function htmlEnd(){return `</body></html>`}

function mostrarProductos(products){
    let ans = htmlStart()+`<ul>${products.map(product => {
            `<li class="product">
                <h3 class="productName">${product.nombre}</h3>
                <p class="productDescription">${product.descripcion}</p>
                <img src="${product.imagen}" alt="${product.nombre}">
                <p class="productCategory">${product.categoria}</p>
                <p class="productSize">${product.talla}</p>
                <p class="productPrice">${product.precio}</p>
            </li>`
        }).join('')}</ul>`+htmlEnd()
    return ans
}

module.exports = {
    mostrarProductos
}