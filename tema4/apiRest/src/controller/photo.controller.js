const PhotoModel = require("../models/photo");


async function getPhoto(request, response) {
    try {
        let respuesta;

        if (request.query.nombre == null) {
            respuesta = ({ error: true, codigo: 200, mensaje: "Nombre es required" });
        } else {
            respuesta = await PhotoModel.find({ nombre: request.query.nombre });
        };

        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};


async function postPhoto(request, response) {
    try {
        let respuesta;
        
        let photo = await PhotoModel.create({
            nombre: request.body.nombre,
            urlPhoto: request.body.urlPhoto,
            titulo: request.body.titulo,
            descripcion: request.body.descripcion,
        });

        respuesta = {error: false, codigo: 200, mensaje: "Photo añadido", data: photo};

        response.send(respuesta);
        
    } catch (error) {
        console.log(error);
    };
};


async function putPhoto(request, response) {
    try {
        let respuesta;

        let photo = await PhotoModel.updateOne({titulo: request.body.titulo}, {descripcion: request.body.descripcion});

        if (photo.modifiedCount === 0) {
            respuesta = {error: true, codigo: 200, mensaje: "Los datos introducidos no existen"};
        } else {
            respuesta = {error: false, codigo: 200, mensaje: "Photo modificado", data: photo};
        };

        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};


async function deletePhoto(request, response) {
    try {
        let respuesta;
        
        // eliminar 1
        if (request.body.nombre && request.body.titulo) {
            let result = await PhotoModel.deleteOne({ nombre: request.body.nombre, titulo: request.body.titulo });

            if (result.deletedCount === 0) {
                respuesta = {error: true, codigo: 200, mensaje: "No se ha podido eliminar la Photo"};
            } else {
                respuesta = {error: false, codigo: 200, mensaje: "Photo eliminada"};
            };

        // eliminar todas
        } else if (request.body.nombre) {
            let result = await PhotoModel.deleteMany({ nombre: request.body.nombre });

            if (result.deletedCount === 0) {
                respuesta = {error: true, codigo: 200, mensaje: "No se han podido eliminar las Photos"};
            } else {
                respuesta = {error: false, codigo: 200, mensaje: "Photos eliminadas"};
            };
        };

        response.send(respuesta);
        
    } catch (error) {
        console.log(error);
    };
};

module.exports = { getPhoto, postPhoto, putPhoto, deletePhoto };

