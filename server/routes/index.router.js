const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.get('/signup', (req, res) => {
    res.send('Testing')
});

router.post('/signup', ctrlUser.signup);

module.exports = router;