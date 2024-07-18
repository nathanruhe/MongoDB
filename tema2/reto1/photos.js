const mongoose = require("mongoose");
const Photos = require("./photosMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

let photosDocument = {
    nombre: "Carlos",
    urlPhoto: "url de la foto",
    titulo: "Vacaciones Mallorca",
    descripcion: "aqui la descripción.."
};

async function postPhotos() {
    try {
        let res = await Photos.create(photosDocument);
        console.log("Documento guardado correctamente");
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
postPhotos();