//Importar mongoose
const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema({
    idEstudiante: Number,
    tipoDocumento: String,
    numeroDocumento: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    email: String,
    telFijo: String,
    telMovil: String,
    linkComprobante: String,
    codigoIcfes: String,
    familiarAsociado: String,
    estratoSocial: String,
    tipoColegio: String,
});

module.exports = mongoose.model('tarea', TareaSchema, 'Tareas')