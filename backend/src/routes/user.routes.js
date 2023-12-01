const { Router } = require('express');
const { getAllUsers, createUser, getUserById, updateUser } = require('../controllers/user.controllers');

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);

module.exports = router;