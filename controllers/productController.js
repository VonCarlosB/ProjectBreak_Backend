const Product = require('../models/Product')
const { mostrarProductos, 
    mostrarDetalle, 
    mostrarDashboard, 
    createForm, 
    editForm } = require('../helpers/baseHTML')

const ProductController = {
    async showProducts(req, res) {
        try {
            const products = await Product.find()
            res.send(mostrarProductos(products, false))
        } catch (error) {
            console.log('Could not get all products, because ofr:')
            console.error(error)
        }
    },

    async showProductById(req, res) {
        try {
            const product = await Product.findById(req.params.productId)
            res.send(mostrarDetalle(product, false))
        } catch (error) {
            console.log('Could not get product, because of:')
            console.error(error)
        }
    },

    async getDashboard(req, res){
        try {
            const products = await Product.find()
            res.send(mostrarDashboard(products, true))
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
            res.redirect('/dashboard')
        } catch (error) {
            console.log('Could not create product, because of:')
            console.error(error)
        }
    },

    async getDetail(req, res){
        try {
            const product = await Product.findById(req.params.productId)
            res.send(mostrarDetalle(product, true))
        } catch (error) {
            console.log('Could not get product detail, because of:')
            console.error(error)
        }
    },

    async showEditProduct(req, res){
        const product = await Product.findById(req.params.productId)
        res.send(editForm(product))
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
            res.redirect('/dashboard/'+req.params.productId)
        } catch (error) {
            console.log('Could not edit product, because of:')
            console.error(error)
        }
    },

    async deleteProduct(req, res){
        try {
            const product = await Product.findByIdAndDelete(req.params.productId)
            res.redirect('/dashboard')
        } catch (error) {
            console.log('Could not delete product, because of:')
            console.error(error)
        }
    }
}

module.exports = ProductController