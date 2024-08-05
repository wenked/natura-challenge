import type { ProductFields } from "../../domain/interfaces/products";
import type { IProductRepository } from "../interfaces/product-repository.interface";

export class ListProductsUseCase {
	constructor(private productRepository: IProductRepository) {}

	async execute({
		page,
		limit,
		categoryId,
		attributes,
	}: {
		page: number;
		limit: number;
		attributes: ProductFields[];
		categoryId?: string;
	}) {
		return this.productRepository.findAll({
			page,
			limit,
			categoryId,
			attributes,
		});
	}
}
