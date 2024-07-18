const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, "Campo obligatorio"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Debe ser tipo email"],
    },

    password: {
        type: String,
        required: [true, "Campo obligatorio"],
        validate: [
            function(password) {
                let condicion = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
                return condicion.test(password);
            },
            "Debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial"
        ],
        select: false
    }
});

UserSchema.pre('save', function(next) {
    if (this.password.includes("a")) {
        console.log("contraseña correcta");
        next();
    } else {
        console.log("la contraseña no cumple los requisitos");
    };
});

module.exports = mongoose.model("User", UserSchema, "user");