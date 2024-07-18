const mongoose = require("mongoose");
const Profile = require("./profileMDB");

mongoose.connect("mongodb://localhost:27017/codenotch", {
    useNewUrlParser: false, useUnifiedTopology: false
});

let profileDocument = new Profile ({
    name: "David",
    surname: "Gomez",
    dateOfBirth: "1997/05/15",
    comments: "aqui los comentarios..",
    rol: "alum"
});

// let profileDocument = new Profile ({
//     name: "Jona",
//     surname: "Gomez",
//     dateOfBirth: "1997-05-15",
//     comments: "aqui los comentarios..",
//     rol: "Alumno"
// });

async function saveProfile() {
    try {
        let res = await profileDocument.save();
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};

saveProfile();