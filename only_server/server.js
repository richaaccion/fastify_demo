const fastify = require("fastify")({
	logger: true
});

fastify.get("/", (req, res) => {
	res.send({hello: "world"});
});

const startServer = async () => {
	fastify.listen(3002, "0.0.0.0", (err, address) => {
		if (err) {
			console.log("ERROR HERE: ", err);
			fastify.log.error("errror here> ", err);
			process.exit(1);
		} else {
			console.log("REGULAR LOG HERE");
			fastify.log.info(`server started at ${address}`);	
		}
	});	
}


startServer();