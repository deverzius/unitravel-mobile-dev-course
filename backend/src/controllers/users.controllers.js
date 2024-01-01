const { supabaseInstance } = require('../supabase');

async function getUser(req, res) {
  const username = req.body.username;
  let isEmail = false;
  let userData = '';

  if (username.includes('@')) {
    userData = username;
    isEmail = true;
  } else {
    userData = '+84' + username;
  }

  const { data, error } = await supabaseInstance
    .from('users')
    .select('id, name, email, phone, citizen, image')
    .eq(isEmail ? 'email' : 'phone', userData);

  if (error) {
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  console.log(1);
  return res.json({ data, error });
}

async function createUser(req, res) {
  const username = req.body.username;
  const loginData = {
    password: req.body.password,
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
