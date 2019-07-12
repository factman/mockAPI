"use strict";
const Fixtures = require("../models/fixtures-models");
const validations = require("../utilities/validations");

const fixturesController = {
    /**
    * @description Return fixtures
    */
    getFixtures: (req, res, next) => {
        Fixtures.find( (err, fixtures) => {
            if(err) {
                return next(err);
            } else {
                res.json(fixtures);
            }
        });
    },

    /**
    * @description Return a specific fixture
    */
    getFixtureById: (req, res, next) => {
        Fixtures.findById(req.params.fID, (err, fixture) => {
            if(err) {
                return next(err);
            } else {
                res.json(fixture);
            }
        });
    },

    /**
    * @description Create fixture
    */
    createFixture: (req, res, next) => {
        let fixture = new Fixtures(req.body);
        fixture.save()
            .then((fixture) => {
                res.status(200).json(fixture);
            })
            .catch((err) => {
                err = new Error('Failed to create new record');
                err.Status = 400;
                return next(err);
            });
    },
    /**
    * @description Edit fixture
    */
    editFixture: (req, res, next) => {
        Fixtures.findById(req.params.fID, (err, fixture) => {
            if(!fixture) {
                err = new Error("Could not load document");
                return next(err);
            } else {
                fixture.teamHome = req.body.teamHome;
                fixture.teamAway = req.body.teamAway;
                fixture.teamHomeScore = req.body.teamHomeScore;
                fixture.teamAwayScore = req.body.teamAwayScore;
                fixture.kickoffTime = req.body.kickoffTime;
                fixture.kickoffDate = req.body.kickoffDate;
                fixture.venue = req.body.venue;
                fixture.finished = req.body.finished;

                fixture.save()
                    .then((fixture) => {
                        res.json({
                            success: true,
                            data: fixture,
                            message: "Fixtures Updated Successfully"
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
    * @description Delete fixture
    */
    deleteFixture: (req, res, next) => {
        Fixtures.findByIdAndRemove({_id: req.params.fID}, (err) => {
            if(err) {
                return next(err);
            } else {
                res.json({
                    success: true,
                    message: "Fixture Deleted Successfully"
                });
            }
        });
    }
};

module.exports = fixturesController;