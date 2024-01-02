const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getRoute(req, res) {
  console.log("Call getRoute");

  const userDat = await retrieveUser(req);
  if (!userDat)
  {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized',
    });
  }

  const startLocation = req.body.startLocation.toLowerCase();
  const endLocation = req.body.endLocation.toLowerCase();

  const { data: locations } = await supabaseInstance
    .from('locations')
    .select('*')
  
  // console.log('Locations ', locations);

  let _startLocation = locations.filter(location => location.name.toLowerCase().includes(startLocation));
  let _endLocation = locations.filter(location => location.name.toLowerCase().includes(endLocation));
  
  if (!_startLocation || !_endLocation)
  {
    return res.status(500).json({
      error: 'Cannot found start/end location'
    });
  }


  const start_id = _startLocation[0].id;
  const end_id = _endLocation[0].id;

  let { data, error } = await supabaseInstance
    .from('routings')
    .select('*')
    .eq('end_location', end_id)
    .eq('start_location', start_id);

  if (error)
  {
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
