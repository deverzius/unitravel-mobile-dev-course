const { supabaseInstance } = require('../supabase');
const { retrieveUser } = require('../utils');

async function getNotifications(req, res) {
  const userDat = await retrieveUser(req);
  if (!userDat)
  {
    return res.status(401).json({
      data: [],
      error: 'Unauthorized'
    });
  }
  const user_id = userDat.id;

  let { data, error } = await supabaseInstance
    .from('notifications')
    .select('*')
    .or(`user_id.eq.${user_id},user_id.is.null`)


  if (error)
  {
    return res.status(500).json({
      error: 'An error occurred',
      details: error.details,
      hint: error.hint,
      message: error.message,
    });
  }

  data = await Promise.all(data.map(async (noti) => {
    const location = await supabaseInstance
      .from('locations')
      .select('*')
      .limit(1)
      .eq('id', noti.sender_id)

    // console.log(location.data[0]);
    noti.location_name = await location.data[0].name;
    noti.image_url = await location.data[0].imageUrl;
    return noti;
  }))

  return res.json({ data, error });
}

module.exports = {
  getNotifications,
};
