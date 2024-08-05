import { randomUUID } from "node:crypto";
import type { IProductRepository } from "../../../application/interfaces/product-repository.interface";
import type {
	Product,
	Product as ProductEntity,
} from "../../../domain/entities/product.entity";
import type {
	IProductFindAll,
	IProductFindAllResponse,
	ProductFields,
} from "../../../domain/interfaces/products";

export class InMemoryProductRepository implements IProductRepository {
	private products: Map<string, ProductEntity> = new Map();

	async create(
		product: Omit<ProductEntity, "id" | "createdAt" | "updatedAt">,
	): Promise<ProductEntity> {
		const id = randomUUID();
		const newProduct: ProductEntity = {
			id,
			...product,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		this.products.set(id, newProduct);

		return newProduct;
	}

	async findById(
		id: string,
		attributes: ProductFields[],
	): Promise<Partial<Product> | null> {
		const product = this.products.get(id);

		if (!product) {
			return null;
		}

		return this.filterAttributes(product, attributes);
	}

	async findAll({
		page,
		limit,
		categoryId,
		attributes,
	}: IProductFindAll): Promise<IProductFindAllResponse> {
		const products = Array.from(this.products.values());

		const filteredProducts = categoryId
			? products.filter((product) => product.categoryId === categoryId)
			: products;

		const total = filteredProducts.length;

		const pages = Math.ceil(total / limit);

		const data = filteredProducts.slice((page - 1) * limit, page * limit);

		return {
			total,
			data: data.map((product) => this.filterAttributes(product, attributes)),
			pages,
		};
	}

	async update(
		id: string,
		product: Partial<ProductEntity>,
	): Promise<ProductEntity | null> {
		const existingProduct = this.products.get(id);

		if (!existingProduct) {
			return null;
		}

		const updatedProduct: ProductEntity = {
			...existingProduct,
			...product,
			updatedAt: new Date(),
		};
		this.products.set(id, updatedProduct);

		return updatedProduct;
	}

	async delete(id: string): Promise<boolean> {
		return this.products.delete(id);
	}

	private filterAttributes(
		product: ProductEntity,
		attributes: ProductFields[],
	): Partial<ProductEntity> {
		const filteredProduct: Partial<ProductEntity> = {};

		if (attributes.includes("id")) {
			filteredProduct.id = product.id;
		}

		if (attributes.includes("name")) {
			filteredProduct.name = product.name;
		}

		if (attributes.includes("description")) {
			filteredProduct.description = product.description;
		}

		if (attributes.includes("price")) {
			filteredProduct.price = product.price;
		}

		if (attributes.includes("categoryId")) {
			filteredProduct.categoryId = product.categoryId;
		}

		if (attributes.includes("images")) {
			filteredProduct.images = product.images;
		}

		if (attributes.includes("createdAt")) {
			filteredProduct.createdAt = product.createdAt;
		}

		if (attributes.includes("updatedAt")) {
			filteredProduct.updatedAt = product.updatedAt;
		}

		return filteredProduct;
	}
}
