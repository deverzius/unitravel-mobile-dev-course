const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

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
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  return res.json({ data, error });
}

async function register(req, res) {
  const username = req.body.username;
  const signUpData = {
    password: req.body.password,
  };

  if (username.includes('@')) {
    signUpData.email = username;
  } else {
    signUpData.phone = '+84' + username;
  }

  const { data, error } = await supabaseInstance.auth.signUp(signUpData);

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

async function signout(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }
  
  const { error } = await supabaseInstance.auth.signOut();

  if (error) {
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  return res.status(200).json({ message: 'Signed out' });
}

module.exports = { authenticate, register, signout };
