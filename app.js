'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require("morgan");
const jest = require("jest");

const apiRouter = require('./routes/apiRouter');
const teamsRouter = require('./routes/teamsRouter');
const fixturesRouter = require('./routes/fixturesRouter');
const authRoutes = require('./routes/authRoutes');
const apiError = require("./utilities/error");

dotenv.config();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Mock");
const connection = mongoose.connection;

connection.on("error", (err) => {
    console.error("Connecton Error", err);
});

connection.once("open", () =>{
    console.log("MongoDB connection established successfully!");
});

app.use('/api', apiRouter);
app.use('/api', authRoutes);
app.use('/api/teams', teamsRouter);
app.use('/api/fixtures', fixturesRouter);


/**
 * @description catch 404 error and forward to error handler.
 */
app.use((req, res, next) => {
    next(apiError.setError({message: "Not Found", status: 404 }));
});

/**
 * @description Error handler.
 */
app.use(apiError.handleErrors);

module.exports = app;