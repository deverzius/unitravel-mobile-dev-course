const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getUser(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const user_id = userDat?.id;

  const { data, error } = await supabaseInstance
    .from('users')
    .select('id, name, email, phone, citizen, image')
    .eq('auth_id', user_id);

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

async function createUser(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const username = req.body.username;
  const loginData = {
    password: req.body.password,
    auth_id: userDat.id,
  };

  if (username.includes('@')) {
    loginData.email = username;
  } else {
    loginData.phone = '+84' + username;
  }

  const { data, error } = await supabaseInstance
    .from('users')
    .insert(loginData);

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

module.exports = { getUser, createUser };
