const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
    address: String,
    
    phone: {
        type: Number,
        min: 600000000,
        max: 999999999
    },

    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        match: [/\S+@\S+\.\S+/]
    }
});

CredentialsSchema.pre('save', function(next) {
    if (this.phone < 600000000 || this.phone > 999999999) {
        console.log("introduce un número de teléfono válido");
    } else {
        console.log("telefono añadido correctamente");
        next();
    };
});

module.exports = mongoose.model("Credentials", CredentialsSchema, "credentials");