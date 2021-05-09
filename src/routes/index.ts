import * as carsController from '../controllers/carsController';
import { RouteOptions } from 'fastify';
import { AddCarSchema, GetCarSchema, GetCarsSchema, PutCarSchema, DeleteCarSchema } from './documentation/carsApi';

const getCarsRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars',
	handler: carsController.getCars,
	schema: GetCarsSchema,
};
const getCarRoute: RouteOptions = {
	method: 'GET',
	url: '/api/cars/:id',
	handler: carsController.getSingleCar,
	schema: GetCarSchema,
};
const postCarRoute: RouteOptions = {
	method: 'POST',
	url: '/api/cars',
	handler: carsController.addCar,
	schema: AddCarSchema,
};
const putCarRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/cars/:id',
	handler: carsController.updateCar,
	schema: PutCarSchema,
};
const deleteCarRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/cars/:id',
	handler: carsController.deleteCar,
	schema: DeleteCarSchema,
};

const routes = [getCarsRoute, getCarRoute, postCarRoute, putCarRoute, deleteCarRoute];

export default routes;
