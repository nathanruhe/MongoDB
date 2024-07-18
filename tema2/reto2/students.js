const mongoose = require("mongoose");
const Students = require("./studentsMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

let student1 = {
    firstName: "Marina", 
    lastName: "Rosado",
    marks:[
        {   date: new Date("2024-05-09"), 
            mark: 4.5,
            subject: {
                title: "Ingles", 
                teachers: [{firstName: "Carlos", lastName: "Gonzalez", groups: ["grupoA", "grupoB"]}]
            }
        },

        {   date: new Date("2024-05-15"),
            mark: 8,
            subject: {
                title: "Quimica",
                teachers: [{firstName: "Maria", lastName: "Ruiz", groups: ["grupoG", "grupoH"]}]
            }
        }
    ]
};

let student2 = {
    firstName: "Daniel",
    lastName: "Perez",
    marks: [
        {
            date: new Date("2024-05-21"),
            mark: 7.5,
            subject: {
                title: "Matematicas",
                teachers: [{firstName: "Laura", lastName: "Roca", groups: ["grupoE", "grupoF"]}]
            }
        },

        {
            date: new Date("2024-05-08"),
            mark: 6.75,
            subject: {
                title: "Quimica",
                teachers: [{firstName: "Maria", lastName: "Ruiz", groups: ["grupoG", "grupoH"]}]
            }
        }
    ]
};

let student3 = {
    firstName: "Jordi",
    lastName: "Campos",
    marks: [
        {
            date: new Date("2024-05-11"),
            mark: 6,
            subject: {
                title: "Ingles",
                teachers: [{firstName: "Carlos", lastName: "Gonzalez", groups: ["grupoA", "grupoB"]}]
            }
        },

        {
            date: new Date("2024-05-26"),
            mark: 9,
            subject: {
                title: "Ciencias",
                teachers: [{firstName: "Antonio", lastName: "Miranda", groups: ["grupoC", "grupoD"]}]
            }
        }
    ]
};

let student4 = {
    firstName: "Carmen",
    lastName: "Castro",
    marks: [
        {
            date: new Date("2024-05-10"),
            mark: 5.25,
            subject: {
                title: "Matematicas",
                teachers: [{firstName: "Laura", lastName: "Roca", groups: ["grupoE", "grupoF"]}]
            }
        },

        {
            date: new Date("2024-05-17"),
            mark: 6.25,
            subject: {
                title: "Ciencias",
                teachers: [{firstName: "Antonio", lastName: "Miranda", groups: ["grupoC", "grupoD"]}]
            }
        }
    ]
};


async function guardarDatos() {
    try {
        await Students.insertMany([student1, student2, student3, student4]);
        console.log("Alumnos guardados");

    } catch (error) {
        console.log(error);
    };
};
guardarDatos();