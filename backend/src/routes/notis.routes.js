const { Router } = require('express');
const { getNotifications } = require('../controllers/notis.controllers');

const router = Router();
router.get('/', getNotifications);

module.exports = router;
