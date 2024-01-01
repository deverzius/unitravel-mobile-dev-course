const { Router } = require('express');
const { getUser, createUser } = require('../controllers/users.controllers');

const router = Router();
router.get('/', getUser);
router.post('/add-user', createUser);

module.exports = router;