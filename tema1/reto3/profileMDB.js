const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Jonathan", "Jona", "Nathan"]
    },

    surname: String,

    dateOfBirth: {
        type: String,
        match: [/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener el formato YYYY-MM-DD"]
    },

    comments: {
        type: String,
        maxlength: 50
    },

    rol: {
        type: String,
        required: true,
        enum: ["Director", "Profesor", "Alumno"]
    }
});

ProfileSchema.pre('save', function(next) {
    if (this.surname != null) {
        console.log("apellido correcto");
        next();
    } else {
        console.log("falta introducir el apellido");
    };
});

module.exports = mongoose.model("Profile", ProfileSchema, "profile");