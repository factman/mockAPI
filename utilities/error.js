"use strict";

const ApiErrorHandler = {
    /**
    * @description Return an error object
    */
    setError: (req, res, next) => {
        var err = new Error("Not Found");
        err.status = 404;
        return next(err);
    },

    /**
    * @description Handle all errors including the error message and status code
    */
    handleErrors: (err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            error: {
                message: err.message           
            }
        });
    }
}

module.exports = ApiErrorHandler;