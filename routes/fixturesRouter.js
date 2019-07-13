"use strict";
const express = require('express');
const fixturesRouter = express.Router();
const fixturesController = require('../controllers/fixturesController');

/**
* GET: /fixtures
* Route for fixtures collection
*/ 
fixturesRouter.get('/', fixturesController.getFixtures);

/**
* GET: /fixtures/:fID
* Route for specific fixture
*/

fixturesRouter.get('/:fID', fixturesController.getFixtureById);

/**
* POST: /fixtures
* Route for creating fixtures
*/ 

fixturesRouter.post('/create', fixturesController.createFixture);

/**
* POST: /fixtures/:fID
* Edit a specific fixture
*/ 

fixturesRouter.put('/edit/:fID', fixturesController.editFixture);

/**
* DELETE: /fixtures/:fID
* Delete a specific fixture
*/ 

fixturesRouter.delete('/delete/:fID', fixturesController.deleteFixture);

module.exports = fixturesRouter;