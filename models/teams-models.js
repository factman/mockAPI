'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamsSchema = new Schema({
    teamName: {
        type: String
    },
    status: {
        type: String
    },
    points: {
        type: Number
    },
    win: {
        type: Number
    },
    loss: {
        type: Number
    },
    draw: {
        type: Number
    },
    played: {
        type: Number
    },
    position: {
        type: Number
    }

});

var Teams = mongoose.model("Teams", TeamsSchema);
module.exports = Teams;