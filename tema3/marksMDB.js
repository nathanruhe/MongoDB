const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
        date: Date,
        mark: Number,
        student_first_name: String,
        student_last_name: String,
        group_name: String,
        subject_name: String
});

const TeachersSchema = new mongoose.Schema({
        teacher_first_name: String,
        teacher_last_name: String,
        marks: [MarksSchema]
});

MarksSchema.add({teachers: [TeachersSchema]});


module.exports = mongoose.model("Marks", MarksSchema, "marks");