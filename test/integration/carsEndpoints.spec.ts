import app from '../../src/index';
import * as dbHandler from './../dbHandler';

describe('Testing the Cars API', () => {
	beforeAll(async () => await dbHandler.connect());
	afterEach(async () => await dbHandler.clear());
	afterAll(async () => await dbHandler.close());

	const carRequest = {
		title: 'z3',
		brand: 'BMW',
		price: '7 000',
		age: 10,
		services: {
			'BMW Hamburg': '21/04/2020',
			'BMW Munchen': '10/02/2020',
		},
	};

	it('Get base route should return status 404', async done => {
		//Arrange & Act
		const response = await app.inject({
			method: 'GET',
			url: '/',
		});

		const expected = JSON.stringify({
			message: 'Route GET:/ not found',
			error: 'Not Found',
			statusCode: 404,
		});

		//Assert
		expect(response.statusCode).toBe(404);
		expect(response.payload).toEqual(expected);
		done();
	});

	it('Post cars should return new car obj with status 200', async done => {
		//Arrange & Act
		const response = await app.inject({
			method: 'POST',
			payload: carRequest,
			url: '/api/cars',
		});

		const payload = JSON.parse(response.payload);

		//Assert
		expect(response.statusCode).toBe(200);
		expect(payload._id).not.toBeNull();
		done();
	});

	it('Get cars should return array of cars obj with status 200', async () => {
		//Arrange
		const carCreationResponse = await app.inject({
			method: 'POST',
			payload: carRequest,
			url: '/api/cars',
		});
		const car = JSON.parse(carCreationResponse.payload);

		//Act
		const response = await app.inject({
			method: 'GET',
			url: '/api/cars',
		});

		const cars = JSON.parse(response.payload);

		//Assert
		expect(response.statusCode).toBe(200);
		expect(cars.length > 0).toBeTruthy();
		expect(cars).toContainEqual(expect.objectContaining({ _id: car._id }));
	});

	it('Get single car should return car obj with status 200', async () => {
		//Arrange
		const carCreationResponse = await app.inject({
			method: 'POST',
			payload: carRequest,
			url: '/api/cars',
		});
		const createdCar = JSON.parse(carCreationResponse.payload);

		//Act
		const response = await app.inject({
			method: 'GET',
			url: `/api/cars/${createdCar._id}`,
		});

		const car = JSON.parse(response.payload);

		//Assert
		expect(response.statusCode).toBe(200);
		expect(car.title).not.toBeNull();
		expect(car.brand).not.toBeNull();
		expect(car.price).not.toBeNull();
		expect(car.age).not.toBeNull();
	});

	it('Put car should return car obj with status 200', async () => {
		//Arrange
		const carCreationResponse = await app.inject({
			method: 'POST',
			payload: carRequest,
			url: '/api/cars',
		});
		const createdCar = JSON.parse(carCreationResponse.payload);
		const newCarBrand = 'Toyota';
		createdCar.brand = newCarBrand;

		//Act
		const response = await app.inject({
			method: 'PUT',
			payload: createdCar,
			url: `/api/cars/${createdCar._id}`,
		});

		const car = JSON.parse(response.payload);

		//Assert
		expect(response.statusCode).toBe(200);
		expect(car.title).not.toBeNull();
		expect(car.brand).not.toBeNull();
		expect(car.price).not.toBeNull();
		expect(car.age).not.toBeNull();
		expect(car.brand).toEqual(newCarBrand);
	});

	it('Delete car should return status 200', async () => {
		//Arrange
		const carCreationResponse = await app.inject({
			method: 'POST',
			payload: carRequest,
			url: '/api/cars',
		});
		const createdCar = JSON.parse(carCreationResponse.payload);

		//Act
		const response = await app.inject({
			method: 'DELETE',
			url: `/api/cars/${createdCar._id}`,
		});

		//Assert
		expect(response.statusCode).toBe(200);
	});
});
