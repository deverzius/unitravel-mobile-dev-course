const { Router } = require('express');
const { getImage } = require('../controllers/image.controllers');

const router = Router();
router.post('/', getImage);

module.exports = router;
