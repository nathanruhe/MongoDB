const mongoose = require("mongoose");
const Students = require("./studentsMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

async function mostrarNotas(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log(" - notas de " + nombre)
        res.marks.forEach(elem => {
            console.log(elem.mark);
        });
    } catch (error) {
        console.log(error);
    };
};
mostrarNotas("Marina");

async function mostrarAsignaturas(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log("\n - asignaturas de " + nombre)
        res.marks.forEach(elem => {
            console.log(elem.subject.title);
        });
    } catch (error) {
        console.log(error);
    };
};
mostrarAsignaturas("Daniel");

async function mostrarProfesores(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log("\n - profesores de " + nombre)
        res.marks.forEach(elem => {
            elem.subject.teachers.forEach(elem => {
                console.log(elem.firstName, elem.lastName);
            });
        });
    } catch (error) {
        console.log(error);
    };
};
mostrarProfesores("Jordi");