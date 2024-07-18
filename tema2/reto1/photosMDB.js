const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    urlPhoto: {
        type: String,
        required: true
    },

    titulo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true,
        maxlength: 50
    }
});

module.exports = mongoose.model("Photos", PhotosSchema, "photos");