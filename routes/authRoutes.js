"use strict";

const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/authController');
const validation = require('../utilities/validations');


/**
* POST: /admin/signup
* Route to Sign-up Admin
*/ 
authRoutes.post('/admin/signup', authController.adminSignUp);
/**
* POST: /admin/login
* Route to Login Admin
*/ 
authRoutes.post('/admin/login', authController.adminLogin);
/**
* POST: /user/signup
* Route to Sign-up User
*/ 
authRoutes.post('/user/signup', authController.userSignUp);
/**
* POST: /user/login
* Route to Login Userr
*/ 
authRoutes.post('/user/login', authController.userLogin);

module.exports = authRoutes;