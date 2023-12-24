const { supabaseInstance } = require('../supabase');

async function getRoute(req, res) {
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
