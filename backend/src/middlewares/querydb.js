async function queryDB(callback) {
	try
	{
		return callback();
	}
	catch (error)
	{
		res.status(500).json({
			ok: false,
			error: "Something went wrong!"
		});
	}
	finally
	{
		async () =>
			await prisma.$disconnect()
	}

}