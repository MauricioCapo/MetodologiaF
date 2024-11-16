import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware para logging y parseo
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:3000',  // Reemplaza con el dominio de tu frontend
    credentials: true,  // Permite el envío de cookies
}));

// Usuarios de prueba
let usuarios = [{ username: "admin", password: "1234" }];

// Ruta /inicio que sirve el archivo index.html de la carpeta public
app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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
    const { username, password } = req.body;

    let usuario = usuarios.find(u => u.username === username);
    if (usuario) {
        return res.status(401).json({ ok: false, mensaje: 'Usuario ya registrado' });
    } else {
        usuarios.push({ username, password });
        return res.status(201).json({ ok: true, mensaje: 'Usuario registrado' });
    }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let usuario = usuarios.find(u => u.username === username && password === u.password);
    if (usuario) {
        let token = generarToken();
        usuario.token = token;
        res.cookie('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 600000)  // Expira en 10 minutos
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
    res.status(200).json({ ok: true, mensaje: 'Esta logueado', usuario: usuario.username });
});

// Ruta para obtener la lista de usuarios (solo para prueba)
app.get('/usuarios', (req, res) => {
    res.status(200).json({ usuarios });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
