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

async function comparePassword(password, hash) {
	return bcrypt
		.compare(password, hash)
		.then(res => {
			console.log('Authen result: ', res)
			return res
		})
		.catch(err => console.error(err.message))
}

module.exports = { hashPassword, comparePassword }