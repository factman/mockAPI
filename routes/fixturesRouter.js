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
* GET: /fixtures/:tID
* Route for specific fixture
*/

fixturesRouter.get('/:tID', fixturesController.getFixtureById);

/**
* POST: /fixtures
* Route for creating fixtures
*/ 

fixturesRouter.post('/', fixturesController.createFixture);

/**
* POST: /fixtures/:tID
* Edit a specific fixture
*/ 

fixturesRouter.post('/edit/:tID', fixturesController.editFixture);

/**
* DELETE: /fixtures/:tID
* Delete a specific fixture
*/ 

fixturesRouter.delete('/delete/:fID', fixturesController.deleteFixture);

module.exports = fixturesRouter;