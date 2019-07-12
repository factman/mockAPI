"use strict";
const express = require("express");
const apiController = require("../controllers/apiController");
const apiRouter = express.Router();

/**
 * @description: Return API Name.
 */
apiRouter.get("/", apiController.welcome);

/** 
 * POST /api/admin
 * @description Reset all Admin Collection.
 */
apiRouter.post('/admin/reset', apiController.resetAuthCollection);
/** 
 * POST /api/teams
 * @description Reset all Teams Collection.
 */
apiRouter.post('/teams/reset', apiController.resetTeamsCollection);
/** 
 * POST /api/fixtures
 * @description Reset all Fixtures Collection.
 */
apiRouter.post('/fixures/reset', apiController.resetFixturesCollection);

module.exports = apiRouter;