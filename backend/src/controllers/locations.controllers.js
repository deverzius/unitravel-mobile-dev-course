const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getLocations(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const { data, error } = await supabaseInstance.from('locations').select('*');

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

async function getFavorite(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const { data, error } = await supabaseInstance
    .from('locations')
    .select('*')
    .eq('isFavorite', 'true');

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

async function getRecently(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const { data, error } = await supabaseInstance
    .from('locations')
    .select('*')
    .eq('isRecently', 'true');

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

async function getRecommended(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const { data, error } = await supabaseInstance
    .from('locations')
    .select('*')
    .eq('isRecommended', 'true');

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

async function getLocation(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat) {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const id = req.body.id;
  const { data, error } = await supabaseInstance
    .from('locations')
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
  getLocations,
  getFavorite,
  getRecently,
  getRecommended,
  getLocation,
};
