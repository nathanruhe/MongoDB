const mongoose = require("mongoose");
const Photos = require("./photosMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

// SUBIDA DE FOTOS
async function subirFotos(nombre, urlPhoto, titulo, descripcion) {
    let photosDocument = {
        nombre: nombre,
        urlPhoto: urlPhoto,
        titulo: titulo,
        descripcion: descripcion
    };

    try {
        let res = await Photos.create(photosDocument);
        console.log("Documento guardado correctamente");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
subirFotos("Carlos", "url de la foto", "Vacaciones Mallorca", "aqui la descripción..");


// OBTENER FOTOS
async function obtenerFotos(nombre) {
    try {
        let res = await Photos.find({ nombre: nombre });
        console.log("Fotos encontradas");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
obtenerFotos("Carlos");


// MODIFICAR FOTOS
async function modificarFotos(titulo, descripcion) {
    try {
        let res = await Photos.updateOne({ titulo: titulo }, { descripcion: descripcion });
        console.log("Foto modificada");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
modificarFotos("Canarias", "nueva descripción");


// ELIMINAR FOTO
async function eliminarFoto(nombre, titulo) {
    try {
        let res = await Photos.deleteOne({ nombre: nombre, titulo: titulo });
        console.log("Foto eliminada");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
eliminarFoto("Roberto", "Bilbao");


// ELIMINAR TODAS LAS FOTOS
async function eliminarTodasLasFotos(nombre) {
    try {
        let res = await Photos.deleteMany({ nombre: nombre });
        console.log("Todas las fotos eliminadas");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
eliminarTodasLasFotos("Carlos");