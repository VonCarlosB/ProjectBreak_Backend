const Product = require('../models/Product')

const apiController = {
    async showProducts(req, res) {
        try {
            const products = await Product.find()
            res.json(products)
        } catch (error) {
            res.json({mensaje:error})
        }
    },

    async showProductById(req, res) {
        try {
            const product = await Product.findById(req.params.productId)
            res.json(product)
        } catch (error) {
            res.json({mensaje:error})
        }
    },

    async createProduct(req, res){
        try {
            const {nombre, descripcion, categoria, talla, precio} = req.body
            const imagen = req.file.path
            const product = await Product.create({ nombre, descripcion, imagen, categoria, talla, precio })
            res.json(product)
        } catch (error) {
            res.json({mensaje:error})
        }
    },

    async updateProduct(req, res){
        try {
            const {nombre, descripcion, categoria, talla, precio} = req.body
            if(req.file != undefined){
                const imagen = req.file.path
                const product = await Product.findByIdAndUpdate(req.params.productId, {nombre, descripcion, imagen, categoria, talla, precio})
            }else{
                const product = await Product.findByIdAndUpdate(req.params.productId, {nombre, descripcion, categoria, talla, precio})
            }
            const product = await Product.findById(req.params.productId)
            res.json(product)
        } catch (error) {
            res.json({mensaje:error})
        }
    },

    async deleteProduct(req, res){
        try {
            const product = await Product.findByIdAndDelete(req.params.productId)
            res.json(product)
        } catch (error) {
            res.json({mensaje:error})
        }
    }
}

module.exports = apiController