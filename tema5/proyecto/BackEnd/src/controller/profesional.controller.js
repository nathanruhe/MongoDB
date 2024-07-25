const ProfesionalModel = require("../models/profesional");


async function getProfesional(request, response) {
    try {
        let respuesta;

        if (request.query.nombre && request.query.apellido) {
            const profesionales = await ProfesionalModel.find({
                first_name: request.query.nombre,
                last_name: request.query.apellido
            });

            if (profesionales.length === 0) {
                respuesta = {error: true, codigo: 200, mensaje: "Profesional no encontrado"};
            } else {
                respuesta = {error: false, codigo: 200, data: profesionales};
            };
        } else {
            const profesionales = await ProfesionalModel.find();
            respuesta = {error: false, codigo: 200, data: profesionales};
        };

        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};


async function postProfesional(request, response) {
    try {
        let respuesta;

        const profesional = await ProfesionalModel.create({
            first_name: request.body.nombre,
            last_name: request.body.apellido,
            age: request.body.edad,
            weight: request.body.peso,
            height: request.body.altura,
            isRetired: request.body.retirado,
            nationality: request.body.nacionalidad,
            oscarNumber: request.body.oscars,
            profession: request.body.profesion
        });

        respuesta = {error: false, codigo: 200, mensaje: "Profesional añadido", data: profesional};

        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};


async function putProfesional(request, response) {
    try {
        let respuesta;

        const modificar = {
            first_name: request.body.nombre,
            last_name: request.body.apellido,
            age: request.body.edad,
            weight: request.body.peso,
            height: request.body.altura,
            isRetired: request.body.retirado,
            nationality: request.body.nacionalidad,
            oscarNumber: request.body.oscars,
            profession: request.body.profesion
        };

        const profesional = await ProfesionalModel.updateOne({first_name: request.body.nombre}, modificar);

        if (profesional.modifiedCount === 0) {
            respuesta = {error: true, codigo: 200, mensaje: "No existe el profesional con este nombre"};
        } else {
            respuesta = {error: false, codigo: 200, mensaje: "Profesional modificado", data: profesional};
        };

        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};


async function deleteProfesional(request, response) {
    try {
        let respuesta;

        const result = await ProfesionalModel.deleteOne({first_name: request.body.nombre});

        if (result.deletedCount === 0) {
            respuesta = {error: true, codigo: 200, mensaje: "No existe ningun profesional con este nombre"};
        } else {
            respuesta = {error: false, codigo: 200, mensaje: "Profesional eliminado"};
        };
        
        response.send(respuesta);

    } catch (error) {
        console.log(error);
    };
};

module.exports = { getProfesional, postProfesional, putProfesional, deleteProfesional };

