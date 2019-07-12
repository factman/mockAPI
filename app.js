'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require("morgan");

const apiRouter = require('./routes/apiRouter');
const teamsRouter = require('./routes/teamsRouter');
const fixturesRouter = require('./routes/fixturesRouter');
const authRoutes = require('./routes/authRoutes');
const apiError = require("./utilities/error");
const connectDb = require("./connection/connectdb");

dotenv.config();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(cors());

connectDb.connect();

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

//Raising the app to listen to port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

module.exports = app;