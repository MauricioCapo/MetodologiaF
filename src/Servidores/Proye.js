const express = require('express');
const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Guardar los archivos en la carpeta 'uploads'
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Renombrar archivo con un nombre único
    }
});

const upload = multer({ storage });

const app = express();
const port = 5000;

// Crear la carpeta 'uploads' si no existe
const fs = require('fs');
if (!fs.existsSync('./uploads')) {
    fs.mkdirSync('./uploads');
}

// Ruta para manejar la carga de archivos
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No se ha subido ningún archivo.');
    }
    // Aquí puedes guardar los datos adicionales como el nombre y la descripción en tu base de datos
    console.log('Archivo recibido:', req.file);
    res.json({ message: 'Archivo cargado correctamente', file: req.file });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});