const { Router } = require('express');
const { getReviews, addReview } = require('../controllers/reviews.controllers');

const router = Router();
router.post('/', getReviews);
router.post('/add-review', addReview);

module.exports = router;
