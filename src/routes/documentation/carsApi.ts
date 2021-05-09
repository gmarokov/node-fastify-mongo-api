export const AddCarSchema = {
	description: 'Create a new car',
	tags: ['cars'],
	summary: 'Creates new car with given values',
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			brand: { type: 'string' },
			price: { type: 'string' },
			age: { type: 'number' },
			services: { type: 'object' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};

export const PutCarSchema = {
	description: 'Updates existing car',
	tags: ['cars'],
	summary: 'Updates car by Id with given values',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'Car Id'
			}
		}
	},
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			brand: { type: 'string' },
			price: { type: 'string' },
			age: { type: 'number' },
			services: { type: 'object' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetCarSchema = {
	description: 'Gets a single car',
	tags: ['cars'],
	summary: 'Gets car by Id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'Car Id'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetCarsSchema = {
	description: 'Gets all cars',
	tags: ['cars'],
	summary: 'Gets all cars',
	response: {
		200: {
			description: 'Successful response',
			type: 'array',
			items: {
				type: 'object',
				properties: {
					_id: { type: 'string' },
					title: { type: 'string' },
					brand: { type: 'string' },
					price: { type: 'string' },
					age: { type: 'number' },
					services: { type: 'object' },
					__v: { type: 'number' },
				},
			}
		},
	},
};

export const DeleteCarSchema = {
	description: 'Deletes a single car',
	tags: ['cars'],
	summary: 'Deletes car by Id',
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'Car Id',
			},
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				brand: { type: 'string' },
				price: { type: 'string' },
				age: { type: 'number' },
				services: { type: 'object' },
				__v: { type: 'number' },
			},
		},
	},
};
