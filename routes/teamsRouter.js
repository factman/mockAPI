"use strict";
const express = require('express');
const teamsRouter = express.Router();
const teamsController = require('../controllers/teamsController');

/**
* GET: /teams
* Route for teams collection
*/ 
teamsRouter.get('/', teamsController.getTeams);

/**
* GET: /teams/:tID
* Route for specific team
*/ 

teamsRouter.get('/:tID', teamsController.getTeamById);

/**
* POST: /teams/create
* Route for creating teams
*/ 

teamsRouter.post('/create', teamsController.createTeam);

/**
* PUT: /teams/edit/:tID
* Edit a specific team
*/ 

teamsRouter.put('/edit/:tID', teamsController.editTeam);

/**
* DELETE: /teams/delete/:tID
* Delete a specific team
*/ 

teamsRouter.delete('/delete/:tID', teamsController.deleteTeam);

module.exports = teamsRouter;
