"use strict";
const Authentication = require('../models/auth-models');
const validation = require('../utilities/validations');
const dotenv = require('dotenv');

dotenv.config();
const authController = {
   adminSignUp: (req, res, next) => {
        validation.validateUserData(req.body, process.env.ADMIN_TOKEN_SECRET, (erradmindata, admindata) => {
            console.log(admindata);
            if(erradmindata) {
                return next(erradmindata);
            }
            const admin = new Authentication({
                name: admindata.name,
                email: admindata.email,
                password: admindata.password
            }); 
            admin.save()
                .then((data) => {
                    data.accessToken = admindata.accessToken;
                    res.status(200).json({
                        success: true,
                        data,
                        message: "Admin created successfully"
                    });
                })
                .catch((err) => {
                    err = new Error("Failed to create new Admin");
                    err.Status = 400;
                    next(err);
                }); 
        });
        
    },

    adminLogin: (res, req, next) => {
        
    },

    userSignUp: (req, res, next) => {
        validation.validateUserData(req.body, process.env.USER_TOKEN_SECRET, (erruserdata, userdata) => {
            console.log(userdata);
            if(erruserdata) {
                return next(erruserdata);
            }
            const user = new Authentication({
                name: userdata.name,
                email: userdata.email,
                password: userdata.password
            }); 
            user.save()
                .then((data) => {
                    data.accessToken = userdata.accessToken;
                    res.status(200).json({
                        success: true,
                        data,
                        message: "User created successfully"
                    });
                })
                .catch((err) => {
                    err = new Error("Failed to create new User");
                    err.Status = 400;
                    next(err);
                }); 
        });
    },

    userLogin: (res, req, next) => {
        
    }
};

module.exports = authController;