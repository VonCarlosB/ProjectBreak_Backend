const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

const { dbConnection } = require('./config/db')

const productRoutes = require('./routes/productRoutes');
//const swaggerUI = require('swagger-ui-express')
//const docs = require('./docs/index')

//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use(express.json());

app.use('/', productRoutes);

dbConnection()

app.listen(PORT, () => {
    console.log('Server started on port '+ PORT)
})