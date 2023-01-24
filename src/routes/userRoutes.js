const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.route('/getTokenGithub').get(userController.getTokenGithub);
router.route('/getDataByGitHub').get(userController.getDataByGitHub);
router.route('/login').post(userController.getUser);

module.exports = router;
