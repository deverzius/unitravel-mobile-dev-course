const { Router } = require('express');
const { getImage } = require('../controllers/image.controllers');

const router = Router();
router.get('/', getImage);

module.exports = router;
