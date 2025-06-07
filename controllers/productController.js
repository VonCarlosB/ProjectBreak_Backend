const Product = require('../models/Product')
const { mostrarProductos, mostrarDetalle, mostrarDashboard, createForm } = require('../helpers/baseHTML')

const ProductController = {
    async showProducts(req, res) {
        try {
            const products = await Product.find()
            res.send(mostrarProductos(products))
        } catch (error) {
            console.log('Could not get all products, because ofr:')
            console.error(error)
        }
    },

    async showProductById(req, res) {
        try {
            const product = await Product.findById(req.params.productId)
            res.send(mostrarDetalle(product))
        } catch (error) {
            console.log('Could not get product, because of:')
            console.error(error)
        }
    },

    async getDashboard(req, res){
        try {
            const products = await Product.find()
            res.send(mostrarDashboard(products))
        } catch (error) {
            console.log('Could not get dashboard, because of:')
            console.error(error)
        }
    },

    async showNewProduct(req, res){
        res.send(createForm())
    },

    async createProduct(req, res){
        try {
            const {nombre, descripcion, categoria, talla, precio} = req.body
            const imagen = req.file.path
            const product = await Product.create({ nombre, descripcion, imagen, categoria, talla, precio })
            res.redirect('/products')
        } catch (error) {
            console.log('Could not create product, because of:')
            console.error(error)
        }
    },

    async getDetail(req, res){
        try {
            const product = await Product.findById(req.params.productId)
            res.json(product)
        } catch (error) {
            console.log('Could not get product detail, because of:')
            console.error(error)
        }
    },

    async showEditProduct(req, res){
        res.send(`<h2>Edit form</h2>`)
    },

    async updateProduct(req, res){
        try {
            const newName = req.body.name
            const product = await Product.findByIdAndUpdate(req.params.productId, {"nombre":newName})
        } catch (error) {
            console.log('Could not edit product, because of:')
            console.error(error)
        }
    },

    async deleteProduct(req, res){
        try {
            const product = await Product.findByIdAndDelete(req.params.productId)
        } catch (error) {
            console.log('Could not delete product, because of:')
            console.error(error)
        }
    }
}

module.exports = ProductController