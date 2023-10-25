import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod: MongoMemoryServer;

beforeAll(async () => {
	try {
		mongod = await MongoMemoryServer.create();
		const uri = mongod.getUri();
	
		const mongooseOpts = {
			useNewUrlParser: true
		} as mongoose.ConnectOptions;
	
		await mongoose.connect(uri, mongooseOpts);
		console.log('MongoDB InMemory connected...');
	} catch (err) {
		console.error(err);
	}
});

afterAll(async () => {
	await mongoose.connection.dropDatabase();
	await mongoose.connection.close();
	await mongod.stop();
});

afterEach(async () => {
	const collections = mongoose.connection.collections;

	for (const key in collections) {
		const collection = collections[key];
		await collection.deleteMany({});
	}
});
