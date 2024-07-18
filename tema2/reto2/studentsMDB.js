const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
});

StudentsSchema.add({marks: [MarksSchema]})

const SubjectSchema = new mongoose.Schema({
    title: String,
});

MarksSchema.add({subject: SubjectSchema})

const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String],
});

SubjectSchema.add({teachers: [TeachersSchema]})


module.exports = mongoose.model("Students", StudentsSchema, "students");