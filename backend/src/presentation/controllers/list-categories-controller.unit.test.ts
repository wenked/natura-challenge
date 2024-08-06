import { describe, expect, it } from "vitest";
import { ListCategoriesUseCase } from "../../application/use-cases/list-category.use-case";
import { InMemoryCategoryRepository } from "../../infrastructure/repositories/category/in-memory.category.repository";
import { ListCategoriesController } from "./list-categories-controller";

describe("ListCategoriesController", () => {
	it("should return 200 with categories", async () => {
		const categoriesRepository = new InMemoryCategoryRepository();
		const listCategoriesUseCase = new ListCategoriesUseCase(
			categoriesRepository,
		);
		const listCategoriesController = new ListCategoriesController(
			listCategoriesUseCase,
		);

		const category = await categoriesRepository.create({
			name: "Category",
			description: "Category description",
		});

		const response = await listCategoriesController.handle({});

		expect(response.statusCode).toBe(200);
		expect(response.data).toHaveLength(1);
		expect(response.data).toEqual([
			{
				id: category.id,
				name: category.name,
				description: category.description,
			},
		]);
	});
});
