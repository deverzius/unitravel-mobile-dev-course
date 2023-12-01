const { Router } = require('express');
const { AUTH_ENDPOINT } = require('../constants');
const { authenticate } = require('../controllers/auth.controllers');

const router = Router();
router.post('/login', authenticate);
// router.get(`${AUTH_ENDPOINT}/:id`, getUserById);
// router.post(AUTH_ENDPOINT, createUser);
// router.patch(`${AUTH_ENDPOINT}/:id`, updateUser);

module.exports = router;