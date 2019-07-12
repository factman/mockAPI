"use strict";
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv');
const error = require('./error');

dotenv.config();
const Validation = {
    /**
    * @description Return a hash password string
    */
    hashPassword: (password) => {
        return new Promise((resolve, reject) => {
            const hash = crypto.createHash("sha256");
            hash.on("readable", () => {
                const data = hash.read();
                if (data) {
                    resolve(data.toString("hex"));
                }
                else {
                    reject("Error hashing password.");
                }
            });
            hash.write(password);
            hash.end();
        });
    },

    validateUserData: (body, secretkey, callback) => {
        let err = false;
        const data = {
            name: body.name,
            email: body.email,
            password: body.password,
            accessToken: ""
        };
        
        if(!data.name || data.name.length <= 1) {
            err = new Error("Invalid name supplied");
            err.Status = 400;
            return callback(err, null);
        }
        if(!data.email || !data.email.includes("@")) {
            err = new Error("Invalid email address");
            err.Status = 400;
            return callback(err, null);
        }
        if(!data.password || data.password.length < 6) {
            err = new Error("Invalid Password");
            err.Status = 400;
            return callback(err, null);
        } else {
            this.hashPassword(data.password)
                .then((hash) => {
                    data.password = hash;
                    data.accessToken = this.generateToken(data, secretkey);
                    return callback(err, data);
                }, (error) => {
                    err = new Error(error);
                    err.Status = 400;
                    return callback(err, null);
                })
        }
    },

    
    checkToken: ( ) => {
        const header = req.headers['authorization'];
        if(typeof header !== 'undefined') {
            const bearer = header.split(' ');
            const token = bearer[1];
            req.token = token;
            next();
        } else {
            //If header is undefined return Forbidden (403)
            return next(error.setError({status: 403, message: "Forbidden"}));
        }
    },

    generateToken: (data, secretkey) => {
        return jwt.sign(data, secretkey, {expiresIn: '12h'});
    },

    isuserAdmin: () => {

    },

    isUserlogin: () => {
        
    },

    userAUser: () => {

    }
};

module.exports = Validation;