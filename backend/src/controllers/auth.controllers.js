const { supabaseInstance } = require('../supabase');

async function authenticate(req, res) {
	const { data, error } = await supabaseInstance.auth.signInWithPassword({
		email: req.body.email,
		password: req.body.password,
	})

	if (error)
	{
		return res.status(error.status).json({ data, error })
	}

	return res.json({ data, error })
}

async function register(req, res) { 
	const { data, error } = await supabaseInstance.auth.signUp({
		email: req.body.email,
		password: req.body.password,
	})

	if (error)
	{
		return res.status(error.status).json({ data, error })
	}

	return res.json({ data, error })
}

async function signout(req, res) {
	const { error } = await supabaseInstance.auth.signOut()

	if (error)
	{
		return res.status(error.status).json({ error })
	}

	return res.status(200).json({ message: 'Signed out' })
}

module.exports = { authenticate, register, signout }