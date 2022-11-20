
const express = require('express');
const ctrl = require('../controllers/controller');
const router = express.Router();
const auth = require('../middleware/auth').authenticate;


router.post('/login', ctrl.login);
router.post('/signup', ctrl.signup);

module.exports = router
