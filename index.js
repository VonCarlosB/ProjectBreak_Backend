const express = require('express')
const app = express()
const PORT = 8080
const { dbConnection } = require('./config/db')
const routes = require('./routes');
//const swaggerUI = require('swagger-ui-express')
//const docs = require('./docs/index')

//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use(express.json());

app.use('/', routes);

dbConnection()

app.listen(PORT, () => {
    console.log('Server started on port '+ PORT)
})