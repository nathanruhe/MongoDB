const mongoose = require("mongoose");
const User = require("./userMDB");

mongoose.connect("mongodb://localhost:27017/codenotch", {
    useNewUrlParser: false, useUnifiedTopology: false
});

let userDocument = new User ({
    login: "Maria2222",
    password: 324234
});

// let userDocument = new User ({
//     login: "maria@gmail.com",
//     password: "222Maria."
// });

async function saveUser() {
    try {
        let res = await userDocument.save();
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};

saveUser();