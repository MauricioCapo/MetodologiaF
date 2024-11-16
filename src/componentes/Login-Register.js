const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Middleware para logging y parseo
app.use(morgan('dev'));     // Loggea cada request en consola
app.use(cookieParser());    // Para leer cookies
app.use(express.json());    // Para leer JSONs
app.use(express.static('public'));  // Para servir archivos estáticos

// Usuarios de prueba
let usuarios = [{ user: "admin", password: "1234" }];

// Middleware de autenticación
function authMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ ok: false, mensaje: 'No autorizado' });
    }
    const usuario = usuarios.find(u => u.token === token);
    if (!usuario) {
        return res.status(401).json({ ok: false, mensaje: 'No autorizado' });
    }
    req.usuario = usuario;
    next();
}

// Función para generar un token simple
function generarToken() {
    return Math.random().toString().substring(2);
}

// Ruta de registro de usuario
app.post('/register', async (req, res) => {
    const { user, password } = req.body;

    let usuario = usuarios.find(u => u.user === user);
    if (usuario) {
        res.status(401).json({ ok: false, mensaje: 'Usuario ya registrado' });
    } else {
        usuarios.push({ user, password });
        res.status(201).json({ ok: true, mensaje: 'Usuario registrado' });
        console.log('Usuarios registrados:', usuarios);
    }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    const { user, password } = req.body;

    let usuario = usuarios.find(u => u.user === user && password === u.password);
    if (usuario) {
        let token = generarToken();
        usuario.token = token;
        res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 600000) // Expira en 10 minutos
        });
        res.status(200).json({ ok: true, mensaje: 'Usuario logueado', token });
    } else {
        res.status(401).json({ ok: false, mensaje: 'Credenciales inválidas' });
    }
});

// Ruta de cierre de sesión
app.put('/logout', authMiddleware, (req, res) => {
    let usuario = req.usuario;
    delete usuario.token;
    res.clearCookie('token');
    res.status(200).json({ ok: true, mensaje: 'Usuario deslogueado' });
});

// Ruta de información de usuario autenticado
app.get('/info', authMiddleware, (req, res) => {
    let usuario = req.usuario;
    res.status(200).json({ ok: true, mensaje: 'Esta logueado', usuario: usuario.user });
});

// Ruta para obtener la lista de usuarios (solo para prueba)
app.get('/usuarios', (req, res) => {
    res.status(200).json({ usuarios });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
