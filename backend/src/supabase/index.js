if (!process.env.PROJECT_URL)
{
	require('dotenv').config();
}

const supabaseClient = require('@supabase/supabase-js')

const supabaseInstance = supabaseClient.createClient(process.env.PROJECT_URL, process.env.API_KEY)

module.exports = { supabaseInstance };