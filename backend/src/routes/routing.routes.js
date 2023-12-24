const { Router } = require('express');
const { getRoute } = require('../controllers/routing.controllers');

const router = Router();
router.post('/', getRoute);

module.exports = router;
