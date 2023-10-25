import * as fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import { config } from './config/app';
const env = process.env.NODE_ENV;
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

// Configure App
const app = fastify.default({ logger: true });

app.register(fastifySwagger, Options);
app.register(fastifySwaggerUI, {
	routePrefix: '/docs',
	uiConfig: {
	  docExpansion: 'full',
	  deepLinking: false
	}
});

routes.forEach(route => {
	app.register((app, options, done) => {
		app.route(route);
		done();
	});
});

const start = async (): Promise<void> => {
	try {
		await app.ready();
		app.swagger();
		await app.listen({ port: config.app.port });
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

// Configure DB
if (env !== 'test') {
	mongoose
		.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { })
		.then(() => app.log.info('MongoDB connected...'))
		.catch(err => app.log.error(err));
}
