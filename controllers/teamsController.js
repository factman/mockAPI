"use strict";
const Teams = require("../models/teams-models");

const teamsController = {
    /**
    * @description Return teams
    */
    getTeams: (req, res, next) => {
        Teams.find( (err, teams) => {
            if(err) {
                return next(err);
            } else {
                res.json(teams);
            }
        });
    },

    /**
    * @description Return a specific team
    */
    getTeamById: (req, res, next) => {
        Teams.findById(req.params.tID, (err, team) => {
            if(err) {
                return next(err);
            } else {
                res.json(team);
            }
        });
    },

    /**
    * @description Create team
    */
    createTeam: (req, res, next) => {
        let team = new Teams(req.body);
        team.save()
            .then((team) => {
                res.status(200).json(team);
            })
            .catch((err) => {
                err = new Error('Failed to create new record');
                err.Status = 400;
                return next(err);
            });
    },
    
    /**
    * @description Edit team
    */
    editTeam: (req, res, next) => {
        Teams.findById(req.params.tID, (err, team) => {
            if(!team) {
                err = new Error("Could not load document");
                return next(err);
            } else {
                team.name = req.body.name;
                team.status = req.body.status;
                team.points = req.body.points;
                team.win = req.body.win;
                team.loss = req.body.loss;
                team.draw = req.body.draw;
                team.played = req.body.played;
                team.position = req.body.position;

                team.save()
                    .then((team) => {
                        res.json({
                            success: true,
                            data: team,
                            message: "Team Updated Successfully"
                        });
                    })
                    .catch((err) => {
                        err = new Error("Update Failed");
                        err.Status = 400;
                        return next(err);
                    });

            }
        });
    },

    /**
    * @description Delete team
    */
    deleteTeam: (req, res, next) => {
        Teams.findByIdAndRemove({_id: req.params.tID}, (err) => {
            if(err) {
                return next(err);
            } else {
                res.json({
                    success: true,
                    message: "Team Deleted Successfully"
                });
            }
        });
    }
};

module.exports = teamsController;