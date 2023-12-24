const { supabaseInstance } = require('../supabase');

async function getNotifications(req, res) {
  const user_id = req.body.user_id;
  const { data, error } = await supabaseInstance
    .from('notifications')
    .select('*')
    .eq('user_id', user_id);

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
  getNotifications,
};
