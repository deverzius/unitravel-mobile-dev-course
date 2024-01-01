const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getReviews(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const location_id = req.body.location_id;
  const { data, error } = await supabaseInstance
    .from('reviews')
    .select('*')
    .eq('location_id', location_id);

  if (error) {
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  return res.json({ data, error });
}

async function addReview(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const reviewData = {
    location_id: req.body.location_id,
    user_id: req.body.user_id,
    content: req.body.content,
    rate: req.body.rate,
  };
  const { data, error } = await supabaseInstance
    .from('reviews')
    .insert(reviewData);

  if (error) {
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  return res.json({ data, error });
}

module.exports = {
  getReviews,
  addReview,
};
