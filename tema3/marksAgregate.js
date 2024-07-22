const mongoose = require("mongoose");
const Marks = require("./marksMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");


// punto 1
async function notaMedia() {
    try {
        let res = await Marks.aggregate([{$match: {subject_name: "Matemáticas"}}, 
                                         {$group: {"_id": null, "NotaMedia": {$avg: "$mark"}}},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
notaMedia();


// punto 2
async function totalAlumnos() {
    try {
        let res = await Marks.aggregate([{$count:"total de alumnos"}]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
totalAlumnos();


// punto 3
async function datosAlumnos() {
    try {
        let res = await Marks.aggregate([{$project: {student_first_name: 1, 
                                                     student_last_name: 1, 
                                                     _id: 0}},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
datosAlumnos();


// punto 4
async function datosProfesores() {
    try {
        let res = await Marks.aggregate([{$unwind: "$teachers"},
                                         {$project: {"teachers.teacher_first_name": 1, 
                                                     "teachers.teacher_last_name": 1,
                                                     _id: 0}},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
datosProfesores();


// punto 5
async function totalAlumnosPorGrupo() {
    try {
        let res = await Marks.aggregate([{$group: {"_id": "$group_name", "Total de alumnos": {$sum: 1}}},
                                         {$sort: {_id: -1}},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
totalAlumnosPorGrupo();


// punto 6
async function top5Asignaturas() {
    try {
        let res = await Marks.aggregate([{$group: {"_id": "$subject_name", "Nota Media": {$avg: "$mark"}}},
                                         {$match: {"Nota Media": {$gt: 5}}},
                                         {$sort: {"Nota Media": -1}},
                                         {$limit: 5},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};
top5Asignaturas();


// punto 7
async function totalProfesoresPorAsignatura() {
    try {
        let res = await Marks.aggregate([{$unwind: "$teachers"},
                                         {$group: {"_id": "$subject_name", "total profesores": {$sum: 1}}},
                                        ]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
totalProfesoresPorAsignatura();
