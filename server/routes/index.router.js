const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/signup', ctrlUser.signup);
router.post('/authenticate', ctrlUser.authenticate);
router.get ('/userDashboard', jwtHelper.verifyJwtToken, ctrlUser.userDashboard);

module.exports = router;