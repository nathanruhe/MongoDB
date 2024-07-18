const mongoose = require("mongoose");
const Credentials = require("./credentialsMDB");

mongoose.connect("mongodb://localhost:27017/codenotch", {
    useNewUrlParser: false, useUnifiedTopology: false
});

let credentialsDocument = new Credentials ({
    address: "calle marina 2, 08047, Barcelona",
    phone: 666115522,
    email: "davidgomez@gmail.com"
});

async function saveCredentials() {
    try {
        let res = await credentialsDocument.save();
        console.log(res);
    } catch (error) {
        console.log(error);
    };
};

saveCredentials();