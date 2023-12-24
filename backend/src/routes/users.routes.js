const { Router } = require('express');
const { getUser, createUser } = require('../controllers/users.controllers');

const router = Router();
router.post('/', getUser);
router.post('/addUser', createUser);

module.exports = router;