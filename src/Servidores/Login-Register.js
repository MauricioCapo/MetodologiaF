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

let db;  // Declarar variable global para la base de datos

// Intentar conectar a MySQL
const connectToDatabase = () => {
    db = mysql.createConnection({
        host: 'b9wesjn6saikl2isg1k6-mysql.services.clever-cloud.com', // Cambia a tu host de base de datos
        user: 'u1qp7pshb1mzs9fv',  // Tu usuario de base de datos
        password: 'zdbm9VMq1wrpEXHcnKAc', // Tu contraseña de base de datos
        database: 'b9wesjn6saikl2isg1k6', // El nombre de tu base de datos
    });

    db.connect((err) => {
        if (err) {
            console.error('Error de conexión a la base de datos:', err);
            // Si falla la conexión a MySQL, utilizaremos localStorage
        } else {
            console.log('Conectado a la base de datos.');
        }
    });
};

// Intentamos conectar a MySQL
connectToDatabase();

// Función para manejar el registro de usuario
app.post('/register', (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;

    const registerUser = () => {
        // Verificar si la base de datos está disponible
        if (db) {
            const checkUserQuery = 'SELECT * FROM usuarios WHERE username = ?';
            db.query(checkUserQuery, [username], (err, results) => {
                if (err) {
                    console.error('Error al verificar usuario:', err);
                    return res.status(500).json({ ok: false, mensaje: 'Error al verificar usuario' });
                }

                if (results.length > 0) {
                    return res.status(400).json({ ok: false, mensaje: 'Usuario ya registrado' });
                } else {
                    const insertQuery = 'INSERT INTO usuarios (username, password, email, first_name, last_name) VALUES (?, ?, ?, ?, ?)';
                    db.query(insertQuery, [username, password, email, firstName, lastName], (err, results) => {
                        if (err) {
                            console.error('Error al registrar usuario:', err);
                            return res.status(500).json({ ok: false, mensaje: 'Error al registrar usuario' });
                        }
                        return res.status(201).json({ ok: true, mensaje: 'Usuario registrado correctamente' });
                    });
                }
            });
        } else {
            // Usar localStorage si MySQL no está disponible
            const users = JSON.parse(localStorage.getItem('usuarios')) || [];
            if (users.find(user => user.username === username)) {
                return res.status(400).json({ ok: false, mensaje: 'Usuario ya registrado' });
            }
            // Si no, agregar usuario al localStorage
            users.push({ username, password, email, firstName, lastName });
            localStorage.setItem('usuarios', JSON.stringify(users));
            return res.status(201).json({ ok: true, mensaje: 'Usuario registrado correctamente' });
        }
    };

    registerUser();
});

// Función para manejar el inicio de sesión de usuario
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const loginUser = () => {
        if (db) {
            const query = 'SELECT * FROM usuarios WHERE username = ?';
            db.query(query, [username], (err, results) => {
                if (err) {
                    return res.status(500).json({ mensaje: 'Error del servidor' });
                }

                if (results.length === 0 || results[0].password !== password) {
                    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
                }

                const user = results[0];
                const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true });
                return res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario: user.username });
            });
        } else {
            // Usar localStorage si MySQL no está disponible
            const users = JSON.parse(localStorage.getItem('usuarios')) || [];
            const user = users.find(u => u.username === username && u.password === password);
            if (!user) {
                return res.status(401).json({ mensaje: 'Credenciales inválidas' });
            }

            const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            return res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario: user.username });
        }
    };

    loginUser();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
