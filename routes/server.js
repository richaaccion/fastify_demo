const fastify =  require("fastify")({
	logger: true
});

fastify.register(require("./routes.js"));

fastify.listen(3002, "0.0.0.0", (err, address) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
	fastify.log.info(`server started at ${address}`);
});