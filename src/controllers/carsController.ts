import Car, { ICar } from '../models/Car';
import { Document } from 'mongoose';
import { FastifyRequest, FastifyReply } from 'fastify';

export const getCars = async (req: FastifyRequest, reply: FastifyReply): Promise<Document[]> => {
	try {
		const cars = await Car.find();
		return cars;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const getCar = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id
		const car = await Car.findById(id);
		return car;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const addCar = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const car = new Car(req.body);
		return await car.save();
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const updateCar = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const car = req.body as ICar;
		const { ...updateData } = car;
		
		const update = await Car.findByIdAndUpdate(id,  updateData, { new: true });

		if (!update) {
			return reply.status(404).send({ error: 'Car not found' });
		}

		return update;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};

export const deleteCar = async (req: FastifyRequest, reply: FastifyReply) => {
	try {
		const params = req.params as { id: string };
		const id = params.id;
		const car = await Car.findByIdAndRemove(id);
		return car;
	} catch (err) {
		return reply.code(500).send({ error: err})
	}
};
