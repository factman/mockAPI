"use strict";

const Teams = require("../models/teams-models");
const Fixtures = require("../models/fixtures-models");
const User = require("../models/auth-models");
//const validations = require("../utilities/validations");

/**
 * @Description return welcome message
 */
const apiController = {
    welcome: (req, res) => {
        res.json({
            success: true,
            data: null,
            message: "Welcome to MOCK PREMIER LEAGUE API"
        });
    },

    restOuput: (dbName, result, res) => {
        if(result) {
            res.json({
                success: true,
                data: result,
                message: `${dbName} Database reset successfully`
            });
        } else {
            res.json({
                success: false,
                data: result,
                message: `${dbName} Database reset failed`
            });
        }
    },

    
    /**
     * @Description Reset Authentication Collection 
     */
    resetAuthCollection: (req, res, next)=> {
        User.collection.drop()
            .then((result) => {
                this.restOuput("Authentication", result, res);
            })
            .catch(next);
    },

    /**
     * @Description Reset Team Collection 
     */
    resetTeamsCollection: (req, res, next)=> {
        Teams.collection.drop()
            .then((result) => {
                this.restOuput("Teams", result, res);
            })
            .catch(next);
    },

    /**
     * @Description Reset User Collection 
     */
    resetFixturesCollection: (req, res, next)=> {
        Fixtures.collection.drop()
            .then((result) => {
                this.restOuput("Fixtures", result, res);
            })
            .catch(next);
    }

};

module.exports = apiController;