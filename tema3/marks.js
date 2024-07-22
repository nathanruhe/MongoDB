const mongoose = require("mongoose");
const Marks = require("./marksMDB");

mongoose.connect("mongodb://localhost:27017/codenotch");

let marks1 = {
    date: new Date("2024-05-09"),
    mark: 7,
    student_first_name: "Marina",
    student_last_name: "Rosado",
    group_name: "grupo A",
    subject_name: "Ingles",
    teachers: [
        {
            teacher_first_name: "Ana",
            teacher_last_name: "Fernández",
        },
        {
            teacher_first_name: "Carlos",
            teacher_last_name: "Martínez",
        }
    ]
};

let marks2 = {
    date: new Date("2024-06-10"),
    mark: 6.25,
    student_first_name: "Laura",
    student_last_name: "Rodríguez",
    group_name: "grupo B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "José",
            teacher_last_name: "López",
        },
        {
            teacher_first_name: "María",
            teacher_last_name: "González",
        }
    ]
};

let marks3 = {
    date: new Date("2024-07-11"),
    mark: 6.75,
    student_first_name: "Pedro",
    student_last_name: "Sánchez",
    group_name: "grupo C",
    subject_name: "Ciencias",
    teachers: [
        {
            teacher_first_name: "Pedro",
            teacher_last_name: "Sánchez",
        },
        {
            teacher_first_name: "Sofía",
            teacher_last_name: "Ramírez",
        }
    ]
};

let marks4 = {
    date: new Date("2024-08-12"),
    mark: 4.5,
    student_first_name: "Elena",
    student_last_name: "Díaz",
    group_name: "grupo A",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Javier",
            teacher_last_name: "Pérez",
        },
        {
            teacher_first_name: "Elena",
            teacher_last_name: "Díaz",
        }
    ]
};

let marks5 = {
    date: new Date("2024-09-13"),
    mark: 5.5,
    student_first_name: "Luis",
    student_last_name: "Torres",
    group_name: "grupo B",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Luis",
            teacher_last_name: "Torres",
        },
        {
            teacher_first_name: "Carmen",
            teacher_last_name: "Morales",
        }
    ]
};

let marks6 = {
    date: new Date("2024-10-14"),
    mark: 8.25,
    student_first_name: "Carmen",
    student_last_name: "Morales",
    group_name: "grupo C",
    subject_name: "Ingles",
    teachers: [
        {
            teacher_first_name: "Daniel",
            teacher_last_name: "Castro",
        },
        {
            teacher_first_name: "Isabel",
            teacher_last_name: "Ortega",
        }
    ]
};

let marks7 = {
    date: new Date("2024-11-15"),
    mark: 4.25,
    student_first_name: "Daniel",
    student_last_name: "Castro",
    group_name: "grupo A",
    subject_name: "Ingles",
    teachers: [
        {
            teacher_first_name: "Miguel",
            teacher_last_name: "Romero",
        },
        {
            teacher_first_name: "Marta",
            teacher_last_name: "Ruiz",
        }
    ]
};

let marks8 = {
    date: new Date("2024-12-16"),
    mark: 3,
    student_first_name: "Isabel",
    student_last_name: "Ortega",
    group_name: "grupo B",
    subject_name: "Ciencias",
    teachers: [
        {
            teacher_first_name: "Francisco",
            teacher_last_name: "Vargas",
        },
        {
            teacher_first_name: "Teresa",
            teacher_last_name: "Herrera",
        }
    ]
};

let marks9 = {
    date: new Date("2024-01-17"),
    mark: 6.75,
    student_first_name: "Miguel",
    student_last_name: "Romero",
    group_name: "grupo C",
    subject_name: "Matemáticas",
    teachers: [
        {
            teacher_first_name: "Raúl",
            teacher_last_name: "Gómez",
        },
        {
            teacher_first_name: "Patricia",
            teacher_last_name: "Mendoza",
        }
    ]
};

let marks10 = {
    date: new Date("2024-02-18"),
    mark: 8,
    student_first_name: "Marta",
    student_last_name: "Ruiz",
    group_name: "grupo A",
    subject_name: "Ciencias",
    teachers: [
        {
            teacher_first_name: "Antonio",
            teacher_last_name: "Silva",
        },
        {
            teacher_first_name: "Marina",
            teacher_last_name: "Rosado",
        }
    ]
};


async function guardarDatos() {
    try {
        await Marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10]);
        console.log("Documentos guardados correctamente");

    } catch (error) {
        console.log(error);
    };
};
guardarDatos();