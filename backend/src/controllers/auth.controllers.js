const { PrismaClient } = require('@prisma/client');
const { comparePassword } = require('../middlewares/hashing');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken')


async function authenticate(req, res) {
	try
	{
		if ((!req.body.email) || (!req.body.password))
		{
			return res.status(400).json({ ok: false, message: "Please enter data" });
		}

		const user = await prisma.user.findUnique({
			where: { email: req.body.email }
		});
		if (!user)
		{
			return res.status(400).json({ ok: false, message: "Authenticate failed: Cannot find email" });
		}

		const isTruePassword = await comparePassword(req.body.password, user.password);
		if (!isTruePassword)
		{
			return res.status(400).json({ ok: false, message: "Authenticate failed: Wrong password" });
		}

		delete user.password;

		// create accessToken
		const accessToken = jwt.sign(
			{
				id: user.id,
				email: user.email
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: process.env.ACCESS_TOKEN_LIFE }
		);
		user.accessToken = accessToken

		return res.json({ ok: true, data: user });
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
		console.log('Error on authControllers!!!', error);
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}

}

module.exports = { authenticate }