import type { Product } from "../entities/product.entity";

export type ProductFields = keyof Product;

export interface IProductFindAll {
	page: number;
	limit: number;
	categoryId?: string;
	attributes: ProductFields[];
}

export interface IProductFindAllResponse {
	total: number;
	data: Partial<Product>[];
	pages: number;
}
