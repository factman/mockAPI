"use strict";
const express = require("express");
const apiController = require("../controllers/apiController");
const apiRouter = express.Router();

/**
 * @description: Return API Name.
 */
apiRouter.get("/", apiController.welcome);

/** 
 * POST /api/reset/admin
 * @description Reset all User Collection.
 */
apiRouter.post('/reset/user', apiController.resetAuthCollection);
/** 
 * POST /api/reset/teams
 * @description Reset all Teams Collection.
 */
apiRouter.post('/reset/teams', apiController.resetTeamsCollection);
/** 
 * POST /api/reset/fixtures
 * @description Reset all Fixtures Collection.
 */
apiRouter.post('/reset/fixtures', apiController.resetFixturesCollection);
/** 
 * POST /api/reset/all
 * @description Reset all Database.
 */
apiRouter.post('/reset/all', apiController.resetAllDatabase);

module.exports = apiRouter;