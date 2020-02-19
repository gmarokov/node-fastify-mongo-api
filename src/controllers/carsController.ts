import boom from 'boom';
import Car from '../models/Car';
import { Document } from 'mongoose';
import { ServerResponse } from 'http';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getCars = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<Document[]> => {
	try {
		const cars = await Car.find();
		return cars;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const getSingleCar = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		const id = req.params.id;
		const car = await Car.findById(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const addCar = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		const car = new Car(req.body);
		return await car.save();
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const updateCar = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		const id = req.params.id;
		const car = req.body;
		const { ...updateData } = car;
		const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
		return update;
	} catch (err) {
		throw boom.boomify(err);
	}
};

export const deleteCar = async (req: FastifyRequest, reply: FastifyReply<ServerResponse>) => {
	try {
		const id = req.params.id;
		const car = await Car.findByIdAndRemove(id);
		return car;
	} catch (err) {
		throw boom.boomify(err);
	}
};
