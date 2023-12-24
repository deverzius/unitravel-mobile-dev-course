const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../middlewares/hashing');
const prisma = new PrismaClient();


async function getAllUsers(req, res) {
	try
	{
		const users = await prisma.user.findMany();
		return res.json({ ok: true, data: users });
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
		console.log('Error on userControllers!!!', error);
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}
}

async function createUser(req, res) {
	try
	{
		if ((!req.body.name) || (!req.body.email) || (!req.body.password))
		{
			return res.status(400).json({ ok: false, message: "Please enter data" });
		}

		const user = await prisma.user.findUnique({
			where: { email: req.body.email }
		});

		if (user)
		{
			return res.status(400).json({ ok: false, message: "Email was exist" });
		}
		const userNew = await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
				password: await hashPassword(req.body.password),
			},
		});
		return res.json({ ok: true, data: userNew });
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
		console.log('Error on userControllers!!!', error);
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}

}

async function getUserById(req, res) {
	try
	{
		const user = await prisma.user.findUnique({
			where: { id: req.params.id }
		});
		console.log("Found a user:", user.email)
		return res.json({ ok: true, data: user });
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
		console.log('Error on userControllers!!!', error);
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}
}

async function updateUser(req, res) {
	try
	{
		const user = await prisma.user.findUnique({
			where: { id: req.params.id }
		});
		if (!user)
		{
			return res.status(400).json({ ok: false, message: "User not found" });
		}

		if (req.body.password)
		{
			req.body.password = await hashPassword(req.body.password)
		}

		const userNew = await prisma.user.update({
			where: { id: req.params.id },
			data: req.body
		})
		console.log("Updated a user: ", userNew)
		return res.json({ ok: true, data: userNew });
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
		console.log('Error on userControllers!!!', error);
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}

}


module.exports = { getAllUsers, createUser, getUserById, updateUser }