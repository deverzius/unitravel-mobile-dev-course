const { PrismaClient } = require('@prisma/client');
const { comparePassword } = require('../middlewares/hashing');
const prisma = new PrismaClient();


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
		const isTruePassword = await comparePassword(req.body.password, user.password);

		if (user && isTruePassword)
		{
			return res.status(400).json({ ok: false, message: "Authenticate failed" });
		}

		delete user.password;
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