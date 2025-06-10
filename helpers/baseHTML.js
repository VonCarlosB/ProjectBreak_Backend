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
        <p><a href="${admin ? "/dashboard" : "/products"}">Ver todos</a></p>
            ${categories.map(category => `<p>${category}</p>`).join("")}
        
    `
    if(admin){
        ans += '<p><a href="/dashboard/new">Añadir producto</a></p>'
    }else{
        ans += '<p><a href="/dashboard">Acceder</a></p>'
    }
    ans += '</nav>'
    return ans
}

const showProduct = (product, admin) => {
    return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <div class="imageContainer">
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            </div>
            <p class="productSize">Talla: ${product.talla}</p>
            <p>${admin ?
            `<a href="/dashboard/${product._id}">Más detalles...</a>` :
            `<a href="/products/${product._id}">Más detalles...</a>`
            }</p>
            </div>`
}

const details = (product, admin) => {
    if(admin){
        return `<div class=product>
            <h3 class="productName">${product.nombre}</h3>
            <p class="productDescription">${product.descripcion}</p>
            <div class="imageContainer">
            <img src="${product.imagen}" alt="Imagen de ${product.nombre}">
            </div>
            <p class="productCategory">Categoría: ${product.categoria}</p>
            <p class="productSize">Talla: ${product.talla}</p>
            <p class="productPrice">Precio: ${product.precio}€</p>
            <form class="botonera" action="/dashboard/${product._id}/delete?_method=DELETE" method="post">
                <button><a href="/dashboard/${product._id}/edit">Editar</a></button>
                <button type="submit">Eliminar</button>
            </form></div>`
    }else{
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
}

const form = (product) => {
    if(product){
        return `<form class="formulario" action="/dashboard/${product._id}?_method=PUT" method="post" enctype="multipart/form-data">
            <label for="nombre">Nombre: </label>
            <input type="text" name="nombre" id="nombre" required value="${product.nombre}">
            <br>
            <label for="descripcion">Descripción: </label>
            <textarea rows="5" cols="50" name="descripcion" id="descripcion" required>${product.descripcion}</textarea>
            <label for="imagen">Imagen: </label>
            <input type="file" name="imagen" id="imagen" accept="image/*">
            <br>
            <label for="categoria">Categoría: </label>
            <select name="categoria" id="categoria" required>
                <option value="Camisetas" ${product.categoria=="Camisetas" ? "selected" : ""}>Camisetas</option>
                <option value="Pantalones" ${product.categoria=="Pantalones" ? "selected" : ""}>Pantalones</option>
                <option value="Zapatos" ${product.categoria=="Zapatos" ? "selected" : ""}>Zapatos</option>
                <option value="Accesorios" ${product.categoria=="Accesorios" ? "selected" : ""}>Accesorios</option>
            </select>
            <br>
            <label for="talla">Talla: </label>
            <select name="talla" id="talla" required>
                <option value="XS" ${product.talla=="XS" ? "selected" : ""}>XS</option>
                <option value="S" ${product.talla=="S" ? "selected" : ""}>S</option>
                <option value="M" ${product.talla=="M" ? "selected" : ""}>M</option>
                <option value="L" ${product.talla=="L" ? "selected" : ""}>L</option>
                <option value="XL" ${product.talla=="XL" ? "selected" : ""}>XL</option>
            </select>
            <br>
            <label for="precio">Precio (€): </label>
            <input type="number" name="precio" id="precio" required value="${product.precio}">
            <br>
            <button type="submit">Editar</button>
        </form>`
    }else{
        return `<form class="formulario" action="/dashboard" method="post" enctype="multipart/form-data">
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
}

const mostrarProductos = (products, admin) => {
    let ans = htmlStart+navBar(admin)
    ans += `<div class="contenedor">${products.map(product => showProduct(product, admin)).join("")}</div>`
    ans+=htmlEnd
    return ans
}

const mostrarDetalle = (product, admin) => {
    return htmlStart + navBar(admin) + `<div class="contenedor">${details(product, admin)}</div>` + htmlEnd
}

const mostrarDashboard = (products, admin) => {
    return htmlStart+navBar(admin)+
    `<div class="contenedor">${products.map(product => showProduct(product, admin)).join("")}</div>`+
    htmlEnd
}

const createForm = () => {
    return htmlStart + navBar(true) + form(false) + htmlEnd;
}

const editForm = (product) => {
    return htmlStart + navBar(true) + form(product) + htmlEnd;
}

module.exports = {
    mostrarProductos,
    mostrarDetalle,
    mostrarDashboard,
    createForm,
    editForm
}