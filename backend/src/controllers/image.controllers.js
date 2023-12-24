const { supabaseInstance } = require('../supabase');

async function getImage(req, res) {
  const id = req.body.id;
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
