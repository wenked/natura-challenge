import type { ProductImage } from "./product-image.entity";

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	categoryId: string;
	images?: ProductImage[];
	createdAt: Date;
	updatedAt: Date;
}
