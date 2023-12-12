const { Router } = require('express');
const { AUTH_ENDPOINT } = require('../constants');
const { authenticate, register } = require('../controllers/auth.controllers');

const router = Router();
router.post('/', authenticate);
router.post('/register', register);

module.exports = router;