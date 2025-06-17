const session = require('express-session')
const bodyParser = require('body-parser')
const { validate } = require('../models/Product')

const setupAPP = (app) => {
    app.use(bodyParser.urlencoded({ extended:true }))
    app.use(session({
        secret: 'secretoSuperSecreto',
        resave: false,
        saveUninitialized: true,
    }))
}

const verifySession = (req, res, next) => {
    if(req.session.password){
        next()
    }else{
        res.redirect('auth/?error=2')
    }
}

const validatePassword = (req, res, next) => {
    const password = process.env.PASSWORD || ''
    if(req.body.password == password){
        req.session.password = req.body.password
        next()
    }else{
        res.redirect('/?error=1')
    }
}

module.exports = {
    setupAPP,
    verifySession,
    validatePassword
}