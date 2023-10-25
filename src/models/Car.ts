import { Schema, model } from "mongoose";

export interface ICar {
	title: string;
	brand: string;
	price: string;
	age: number;
	services: Map<string, string>;
}

const carSchema = new Schema<ICar>({
	title: String,
	brand: String,
	price: String,
	age: Number,
	services: {
		type: Map,
		of: String,
	},
});

export default model<ICar>('Car', carSchema);
