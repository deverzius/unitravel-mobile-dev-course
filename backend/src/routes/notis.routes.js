const { Router } = require('express');
const { getNotifications } = require('../controllers/notis.controllers');

const router = Router();
router.post('/', getNotifications);

module.exports = router;
