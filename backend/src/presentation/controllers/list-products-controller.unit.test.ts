import { describe, expect, it } from "vitest";
import { ListProductsUseCase } from "../../application/use-cases/list-products.use-case";
import { InMemoryCategoryRepository } from "../../infrastructure/repositories/category/in-memory.category.repository";
import { InMemoryProductRepository } from "../../infrastructure/repositories/product/in-memory.product.repository";
import { ListProductsController } from "./list-products-controller";

describe("ListProductsController", () => {
	it("should return 200 with products", async () => {
		const categoryRepository = new InMemoryCategoryRepository();
		const productRepository = new InMemoryProductRepository();

		const category = await categoryRepository.create({
			name: "Category",
			description: "Category description",
		});

		await productRepository.create({
			name: "Product",
			price: 10,
			description: "Product description",
			categoryId: category.id,
		});

		const listProductsUseCase = new ListProductsUseCase(productRepository);
		const listProductsController = new ListProductsController(
			listProductsUseCase,
		);
		const response = await listProductsController.handle({
			query: {
				page: 1,
				limit: 10,
				attributes: ["id", "name", "price", "description"],
			},
		});

		expect(response.statusCode).toBe(200);
		expect(response.data).toHaveProperty("total");
		expect(response.data).toHaveProperty("data");
		expect(response.data).toHaveProperty("pages");
	});

	it("should return 400 if query is missing", async () => {
		const listProductsUseCase = new ListProductsUseCase(
			new InMemoryProductRepository(),
		);
		const listProductsController = new ListProductsController(
			listProductsUseCase,
		);
		const response = await listProductsController.handle({});

		expect(response.statusCode).toBe(400);
		expect(response.data).toHaveProperty("message");
	});
});
