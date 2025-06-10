const express = require('express')
const apiRouter = express.Router()
const apiController = require('../controllers/apiController')

const multer = require('multer')
const storage = require('../utils/cloudinary')
const upload = multer({ storage })

apiRouter.get('/api/products', apiController.showProducts)
apiRouter.get('/api/products/:productId', apiController.showProductById)
apiRouter.post('/api/create', upload.single('imagen'), apiController.createProduct)
apiRouter.put('/api/update/:productId', upload.single('imagen'), apiController.updateProduct)
apiRouter.delete('/api/delete/:productId', apiController.deleteProduct)

module.exports = apiRouter