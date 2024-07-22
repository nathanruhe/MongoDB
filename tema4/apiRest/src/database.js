const mongoose = require("mongoose");

async function connectToDatabase() {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/codenotch");
        console.log("Database connected on " + db.connection.host);
    } catch (error) {
        console.error(error);
    };
};

connectToDatabase();