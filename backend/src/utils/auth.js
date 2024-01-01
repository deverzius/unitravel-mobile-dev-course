const { supabaseInstance } = require('../supabase');

async function retrieveUser(req) {
  try {
    const jwt = req.headers.authorization.split(' ')[1];
    const {
      data: { user },
    } = await supabaseInstance.auth.getUser(jwt);
    return user;
  } catch (error) {
    return null;
  }
}

module.exports = { retrieveUser };
