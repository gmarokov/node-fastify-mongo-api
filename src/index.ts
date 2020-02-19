import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import swagger from 'fastify-swagger';

// Configure HTTP server
const app = fastify.default({ logger: true });

routes.forEach(route => {
	app.route(route);
});

// Register Swagger
app.register(swagger, Options);

const start = async (): Promise<void> => {
	try {
		await app.listen(3000);
		app.swagger();
		app.log.info(`server listening on ${app.server.address()}`);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

// Configure DB
mongoose
	.connect('mongodb://localhost:27017/cars', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.log.info('MongoDB connected…'))
	.catch(err => app.log.error(err));
