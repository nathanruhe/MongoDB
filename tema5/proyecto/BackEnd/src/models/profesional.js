const mongoose = require("mongoose");

const ProfesionalSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nationality: String,
    oscarNumber: Number,
    profession: String,

});

module.exports = mongoose.model("Profesional", ProfesionalSchema, "profesional");