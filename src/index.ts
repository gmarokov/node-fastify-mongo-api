import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';

// Configure HTTP server
const server = fastify.default();

routes.forEach(route => {
	server.route(route);
});

const start = async (): Promise<void> => {
	try {
		await server.listen(3000);
		server.log.info(`server listening on ${server.server.address()}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};
start();

// Configure DB
mongoose
	.connect('mongodb://localhost:27017/cars')
	.then(() => console.log('MongoDB connected…'))
	.catch(err => console.log(err));
