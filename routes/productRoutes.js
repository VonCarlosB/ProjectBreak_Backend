const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.get('/products', ProductController.showProducts)
router.get('/products/:productId', ProductController.showProductById)
router.get('/dashboard', ProductController.getDashboard)
router.get('/dashboard/new', ProductController.showNewProduct)
router.post('/dashboard', ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.getDetail)
router.get('/dashboard/:productId/edit', ProductController.showEditProduct)
router.put('/dashboard/:productId', ProductController.updateProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router