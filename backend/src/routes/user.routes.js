const { Router } = require('express');
const { getAllUsers, createUser, getUserById, updateUser } = require('../controllers/user.controllers');
const { USER_ENDPOINT } = require('../constants');

const router = Router();
router.get(USER_ENDPOINT, getAllUsers);
router.get(`${USER_ENDPOINT}/:id`, getUserById);
router.post(USER_ENDPOINT, createUser);
router.patch(`${USER_ENDPOINT}/:id`, updateUser);

module.exports = router;