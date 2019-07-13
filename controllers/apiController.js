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

    resetOutput: (dbName, result, res) => {
        if(result) {
         return res.json({
                success: true,
                data: result,
                message: `${dbName} Database reset successfully`
            });
        } else {
         return res.json({
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
                this.resetOutput("User", result, res);
            })
            .catch(next);
    },

    /**
     * @Description Reset Team Collection 
     */
    resetTeamsCollection: (req, res, next)=> {
        Teams.collection.drop()
            .then((result) => {
                this.restOutput("Teams", result, res);
            })
            .catch(next);
    },

    /**
     * @Description Reset User Collection 
     */
    resetFixturesCollection: (req, res, next)=> {
        Fixtures.collection.drop()
            .then((result) => {
                this.resetOutput("Fixtures", result, res);
            })
            .catch(next);
    },

    resetAllDatabase: (req, res, next) => {
        User.db.dropDatabase()
            .then((result) => {
                this.resetOutput("All", result, res);
            })
            .catch(next);
    }

};

module.exports = apiController;