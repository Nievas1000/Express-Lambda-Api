const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const appController = require('../controller/appController');

router.route('/getTokenGithub').get(userController.getTokenGithub);
router.route('/getDataByGitHub').get(userController.getDataByGitHub);
router.route('/login').post(userController.getUser);
router.route('/app').post(appController.getApp);
router.route('/getUserToApp').post(userController.getUserToApp);

module.exports = router;
