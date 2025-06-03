const mongoose = require('mongoose')

const categories = ["Camisetas", "Pantalones", "Zapatos", "Accesorios"]
const sizes = ["XS", "S", "M", "L", "XL"]

const ProductSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true},
    categoria: {type: String, enum: categories, required: true},
    talla: {type: String, enum: sizes, required: true},
    precio: {type: Number, min: 0, required: true},
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
