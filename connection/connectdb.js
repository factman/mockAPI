const mongoose = require('mongoose');

const connectDb = {
    connection: null,
    connect: (dbName = "Mock") => {
        mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useCreateIndex: true });
        this.connection = mongoose.connection;
        this.connection.on("error", (err) => {
            console.error("Connecton Error", err);
        });
        this.connection.once("open", () => {
            console.log("MongoDB connection established successfully!");
        });
    },
    disconnect: () => {
        this.connection.disconnect(() => {
            console.log("MongoDB connection Disconnected");
        });

    },
};


module.exports = connectDb;