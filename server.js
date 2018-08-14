const fastify = require("fastify")({
	logger: true
});

fastify.get("/", (req, res) => {
	console.log("REgULAR LOG CONTROLLER:: ");
	res.send({hello: "world"});
});

const startServer = async () => {
	fastify.listen(3002, (err, address) => {
		if (err) {
			console.log("ERROR HERE: ", err);
			fastify.log.error("errror here> ", err);
			// throw err;
		} else {
			console.log("REGULAR LOG HERE");
			fastify.log.info(`server started at ${address}`);	
			process.exit(1);
		}
	});	
}


startServer();