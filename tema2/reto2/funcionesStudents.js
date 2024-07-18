const mongoose = require("mongoose");
const Students = require("./studentsMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

async function mostrarNotas(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log(" - notas de " + nombre)
        console.log(res.marks[0].mark + ", " + res.marks[1].mark);
    } catch (error) {
        console.log(error);
    };
};
mostrarNotas("Marina");

async function mostrarAsignaturas(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log("\n - asignaturas de " + nombre)
        console.log(res.marks[0].subject.title + ", " + res.marks[1].subject.title);
    } catch (error) {
        console.log(error);
    };
};
mostrarAsignaturas("Daniel");

async function mostrarProfesores(nombre) {
    try {
        let res = await Students.findOne({ firstName: nombre });
        console.log("\n - profesores de " + nombre)
        console.log(res.marks[0].subject.teachers[0].firstName, res.marks[0].subject.teachers[0].lastName);
        console.log(res.marks[1].subject.teachers[0].firstName, res.marks[1].subject.teachers[0].lastName);
    } catch (error) {
        console.log(error);
    };
};
mostrarProfesores("Jordi");