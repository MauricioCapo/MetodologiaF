import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'tu_clave_secreta'; // Cambia esto por una clave segura

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

const db = mysql.createConnection({
    host: 'b9wesjn6saikl2isg1k6-mysql.services.clever-cloud.com',   // Cambia a tu host de base de datos (ej. Clever Cloud)
    user: 'u1qp7pshb1mzs9fv',        // Tu usuario de base de datos
    password: 'zdbm9VMq1wrpEXHcnKAc',// Tu contraseña de base de datos
    database: 'b9wesjn6saikl2isg1k6' // El nombre de tu base de datos
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos.');
    }
});

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
        return res.status(401).json({ mensaje: 'No autorizado' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token inválido' });
        }

        req.usuario = decoded; // Decodifica el token y almacena los datos del usuario
        next();
    });
}

// Función para generar un token simple
function generarToken() {
    return Math.random().toString().substring(2);
}

// Ruta de registro de usuario
app.post('/register', (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;

    // Verificar si el usuario ya existe
    const checkUserQuery = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(checkUserQuery, [username], (err, results) => {
        if (err) {
            console.error('Error al verificar usuario:', err);
            return res.status(500).json({ ok: false, mensaje: 'Error al verificar usuario' });
        }

        if (results.length > 0) {
            // Si el usuario ya existe, enviar error
            return res.status(400).json({ ok: false, mensaje: 'Usuario ya registrado' });
        } else {
            // Si el usuario no existe, registrar el nuevo usuario
            const insertQuery = 'INSERT INTO usuarios (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)';
            db.query(insertQuery, [username, password, email, firstName, lastName], (err, results) => {
                if (err) {
                    db.end();
                    console.error('Error al registrar usuario:', err);
                    return res.status(500).json({ ok: false, mensaje: 'Error al registrar usuario' });
                }
                return res.status(201).json({ ok: true, mensaje: 'Usuario registrado correctamente' });
            });
        }
    });
});

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ mensaje: 'Faltan datos en la solicitud' });
    }

    const query = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario:', err);
            return res.status(500).json({ mensaje: 'Error del servidor' });
        }

        if (results.length === 0) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Generar el token
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
            expiresIn: '1h', // Token válido por 1 hora
        });

        res.cookie('token', token, { httpOnly: true }); // Enviar el token como cookie
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario: user.username });
    });
});

// Ruta de cierre de sesión
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ mensaje: 'Sesión cerrada correctamente' });
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
