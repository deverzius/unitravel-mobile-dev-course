const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getImage(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }
  
  const id = req.body.image_id;
  const { data, error } = await supabaseInstance
    .from('images')
    .select('*')
    .eq('id', id);

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
  getImage,
};
