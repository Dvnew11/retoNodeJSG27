//Importamos la libreria express
const express = require('express');

//Importar la libreria de mongoose
const mongoose = require('mongoose');


//Llamamos al constructor de express
const app = express();

//endPoints => Rutas configuración
app.use(express.json()); //Indican que la rutas soportan formato json
app.use(express.urlencoded( { extended: true} )); //Codificación de url activada
const router = express.Router();

//Indicar donde estan los endPoints de la aplicación => URL BASE
app.use('/universidad/api', require( './router/rutas'));

//Configuramos la cadena de conexión a la BDs que esta en MongoDB
mongoose.connect('mongodb+srv://DuvanTic:duvantic@clusterprogweb.45yjw8h.mongodb.net/UniversidadDB?retryWrites=true&w=majority')
    .then( db => console.log('Conexión exitosa'))
    .catch( err => console.log('Error al conectar con la BDs: ' + err));

//Poner en modo escucha el servidor
const puerto = 3000;
app.listen ( puerto, () => {
    console.log(`El servidor esta Online en el puerto ${puerto} - y esta funcionando`);
})