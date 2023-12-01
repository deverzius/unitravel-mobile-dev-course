const bcrypt = require("bcrypt")
const saltRounds = 10

async function hashPassword(password) {
	return bcrypt
		.genSalt(saltRounds)
		.then(salt => {
			return bcrypt.hash(password, salt)
		})
		.catch(err => console.error(err.message))
}

async function validateUser(hash) {
	bcrypt
		.compare(password, hash)
		.then(res => res)
		.catch(err => console.error(err.message))
}

module.exports = { hashPassword, validateUser }