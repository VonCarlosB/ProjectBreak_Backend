const Product = require('../models/Product')
const { mostrarProductos } = require('../helpers/baseHTML')

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
            res.json(product)
        } catch (error) {
            console.log('Could not get product, because of:')
            console.error(error)
        }
    },
    async getDashboard(req, res){
        try {
            res.send(`<h2>Dashboard</h2>`)
        } catch (error) {
            console.log('Could not get dashboard, because of:')
            console.error(error)
        }
    },
    showNewProduct(req, res){
        res.send(`<h2>Create form</h2>`)
    },
    async createProduct(req, res){
        try {
        const product = await Product.create({
            nombre: req.body.name,
            descripcion: req.body.description,
            imagen: req.body.image,
            categoria: req.body.category,
            talla: req.body.size,
            precio: req.body.price
        })
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
            console.log('Could not get product, because of:')
            console.error(error)
        }
    },
    showEditProduct(req, res){
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