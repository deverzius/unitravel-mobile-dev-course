const { supabaseInstance } = require('../supabase');

async function authenticate(req, res) {
  const username = req.body.username;
  const loginData = {
    password: req.body.password,
  };

  if (username.includes('@')) {
    loginData.email = username;
  } else {
    loginData.phone = '+84' + username;
  }

  const { data, error } = await supabaseInstance.auth.signInWithPassword(
    loginData
  );

  if (error) {
    return res.status(error.status).json({ data, error });
  }

  return res.json({ data, error });
}

module.exports = {  };
