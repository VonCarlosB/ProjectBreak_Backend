const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/productController')
const authMidleware = require('../middlewares/authMiddleware')

const multer = require('multer')
const storage = require('../utils/cloudinary')
const upload = multer({ storage })

router.get('/', (req, res) => res.redirect('/products'))
router.get('/products', ProductController.showProducts)
router.get('/products/:productId', ProductController.showProductById)
router.get('/dashboard', authMidleware.verifySession, ProductController.getDashboard)
router.get('/dashboard/new', ProductController.showNewProduct)
router.post('/dashboard', upload.single('imagen'), ProductController.createProduct)
router.get('/dashboard/:productId', ProductController.getDetail)
router.get('/dashboard/:productId/edit', ProductController.showEditProduct)
router.put('/dashboard/:productId', upload.single('imagen'), ProductController.updateProduct)
router.delete('/dashboard/:productId/delete', ProductController.deleteProduct)

module.exports = router