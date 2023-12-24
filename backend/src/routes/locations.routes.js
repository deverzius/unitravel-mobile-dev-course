const { Router } = require('express');
const {
  getLocations,
  getFavorite,
  getRecently,
  getRecommended,
  getLocation,
} = require('../controllers/locations.controllers');

const router = Router();
router.get('/', getLocations);
router.get('/is-favorite', getFavorite);
router.get('/is-recently', getRecently);
router.get('/is-recommended', getRecommended);
router.post('/', getLocation);

module.exports = router;
