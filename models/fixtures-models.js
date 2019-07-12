'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FixturesSchema = new Schema({
    teamHome: {
        type: String
    },
    teamAway: {
        type: String
    },
    teamHomeScore: {
        type: Number
    },
    teamAwayScore: {
        type: Number
    },
    kickoffTime: {
        type: String
    },
    kickoffDate: {
        type: String
    },
    venue: {
        type: String
    },
    finished: {
        type: Boolean
    }
});

const Fixtures = mongoose.model("Fixtures", FixturesSchema);

module.exports = Fixtures;