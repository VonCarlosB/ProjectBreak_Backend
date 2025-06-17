const express = require('express')
const router = express.Router()
const authMidleware = require('../middlewares/authMiddleware')

router.post('/auth', authMidleware.validatePassword, (req, res) => {
    res.redirect('/dashboard')
})

router.get('/auth', (req, res) => {
    const mensajeError = req.query.error ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.') : '';
    if (req.session.password) {
        return res.redirect('/profile');
    }
    res.send(`
        <html>
            <body>
                <h1>Acceso administrador</h1>
                <p>${mensajeError}</p>
                <form method="post" action="/auth">
                    <label for="password">Introduce la contraseña:</label>
                    <input type="text" name="password" required>
                    <button type="submit">Enviar</button>
                </form>
            </body>
        </html>
    `);
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar sesión:', err)
        }
        res.redirect('/products')
    })
})

module.exports = router