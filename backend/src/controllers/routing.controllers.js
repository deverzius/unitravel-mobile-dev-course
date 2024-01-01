const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getRoute(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }
  
  const end_id = req.body.end_id;
  const start_id = req.body.start_id;
  const { data, error } = await supabaseInstance
    .from('routings')
    .select('*')
    .eq('end_location', end_id)
    .eq('start_location', start_id);

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
    getRoute,
};
