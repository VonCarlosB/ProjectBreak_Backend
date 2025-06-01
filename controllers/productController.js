const Product = require('../models/Product')

const ProductController = {
    async getAll(req, res) {
        try {
            const products = await Product.find();
            res.send(products);
        } catch (error) {
            console.log('Could not get all products, because next error:')
            console.error(error);
        }
    }
}

module.exports = ProductController