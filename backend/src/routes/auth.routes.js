const { Router } = require('express');
const { authenticate, register, signout } = require('../controllers/auth.controllers');

const router = Router();
router.post('/', authenticate);
router.post('/register', register);
router.post('/signout', signout);

module.exports = router;