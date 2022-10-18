const { response } = require('express');
const express = require('express');
const router = express.Router(); 
const TareaSchema = require('../modelos/Tarea.js');

router.get('/', function( req, res ){
    res.send('Hola desde Express');
})

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idEstudiante: req.body.id,
        tipoDocumento: req.body.tipoDocumento,
        numeroDocumento: req.body.numeroDocumento,
        nombres: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        email: req.body.email,
        telFijo: req.body.fijo,
        telMovil: req.body.movil,
        linkComprobante: req.body.comprobante,
        codigoIcfes: req.body.icfes,
        familiarAsociado: req.body.familiar,
        estratoSocial: req.body.estrato,
        tipoColegio: req.body.colegio,

    });

    //Le decimos a mongo que nos guarde la información enviada
    nuevaTarea.save( function( err, datos ){
        if ( err ){
            console.log(err);
        }
        res.send('Tarea almacenada correctamente');
    });
});

router.get('/tarea', (req, res) => {
    TareaSchema.find( (err, datos) => {
        if ( err )
            console.log('Error al leer las tareas', err);
        res.send(datos);
    });
});

router.post('/tarea-actualizar', (req, res) => {
    let body = req.body;
    TareaSchema.updateOne({ 'idEstudiante': body.id}, {
        $set: {
            tipoDocumento: req.body.tipoDocumento,
            numeroDocumento: req.body.numeroDocumento,
            nombres: req.body.nombre,
            apellidos: req.body.apellidos,
            direccion: req.body.direccion,
            email: req.body.email,
            telFijo: req.body.fijo,
            telMovil: req.body.movil,
            linkComprobante: req.body.comprobante,
            codigoIcfes: req.body.icfes,
            familiarAsociado: req.body.familiar,
            estratoSocial: req.body.estrato,
            tipoColegio: req.body.colegio,
        }
    },
    function(error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo modificar la tarea',
                err
            });
        }else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    );
});

router.put('/tarea-actualizar', (req, res) => {
    let body = req.body;
    TareaSchema.updateOne({ 'idEstudiante': body.idEstudiante}, {
        $set: req.body
    },
    function(error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo modificar la tarea',
                err
            });
        }else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
});

router.delete('/tarea-eliminar/:id', (req, res) => {
    let params = req.params;
    TareaSchema.deleteOne({ 'idEstudiante': params.id}, {
        $set: req.body
    },
    function(error, info) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo eliminar la tarea',
                err
            });
        }else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
})

module.exports = router;