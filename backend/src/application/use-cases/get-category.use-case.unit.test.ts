import { describe, expect, it } from "vitest";
import { InMemoryCategoryRepository } from "../../infrastructure/repositories/category/in-memory.category.repository";

import { GetCategoryUseCase } from "./get-category.use-case";

describe("GetCategoryUseCase", () => {
	it("should return a category by id", async () => {
		const categoryRepository = new InMemoryCategoryRepository();
		const mockCategory = await categoryRepository.create({
			name: "Test Category",
			description: "Test Description",
		});

		const getCategoryUseCase = new GetCategoryUseCase(categoryRepository);

		const result = await getCategoryUseCase.execute(mockCategory.id);

		expect(result).not.toBeNull();
		expect(result?.id).toBe(mockCategory.id);
		expect(result?.name).toBe("Test Category");
	});

	it("should throw an error if category is not found", async () => {
		const categoryRepository = new InMemoryCategoryRepository();

		const getCategoryUseCase = new GetCategoryUseCase(categoryRepository);

		await expect(
			getCategoryUseCase.execute("058d31b0-51c2-47e5-b295-e45f52700da2"),
		).rejects.toThrow();
	});
});
