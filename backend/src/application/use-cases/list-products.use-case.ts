import type { ProductFields } from "../../domain/interfaces/products";
import { formatPrice } from "../../utils/formatPrice";
import type { IProductRepository } from "../interfaces/product-repository.interface";

export class ListProductsUseCase {
	constructor(private productRepository: IProductRepository) {}

	async execute({
		page,
		limit,
		categoryId,
		attributes,
		name,
	}: {
		page: number;
		limit: number;
		attributes: ProductFields[];
		categoryId?: string;
		name?: string;
	}) {
		const products = await this.productRepository.findAll({
			page,
			limit,
			categoryId,
			attributes,
			name,
		});

		const formattedProducts = products.data.map((product) => ({
			...product,
			price: product.price ? formatPrice(product.price) : undefined,
		}));

		return {
			total: products.total,
			data: formattedProducts,
			pages: products.pages,
		};
	}
}
