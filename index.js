const express = require('express')
const cors = require('cors')
const dbConnection = require('./config/db')
const productRoutes = require('./routes/productRoutes');
const apiRoutes = require('./routes/apiRoutes')
const methodOverride = require('method-override')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

//const swaggerUI = require('swagger-ui-express')
//const docs = require('./docs/index')

//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use(cors())
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(methodOverride('_method'))

app.use('/', productRoutes, apiRoutes)

dbConnection()

app.listen(PORT, () => {
    console.log('Server started on port '+ PORT)
})