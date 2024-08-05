import { describe, expect, it } from "vitest";
import type { Category } from "../../domain/entities/category.entitiy";
import { InMemoryCategoryRepository } from "../../infrastructure/repositories/category/in-memory.category.repository";
import { ListCategoriesUseCase } from "./list-category.use-case";

describe("ListCategoriesUseCase", () => {
	it("should return all categories with specified attributes", async () => {
		const categoryRepository = new InMemoryCategoryRepository();
		const mockCategory1 = await categoryRepository.create({
			name: "Category 1",
			description: "Description 1",
		});

		const mockCategory2 = await categoryRepository.create({
			name: "Category 2",
			description: "Description 2",
		});

		const categories: Partial<Category>[] = [
			{
				id: mockCategory1.id,
				name: mockCategory1.name,
				description: mockCategory1.description,
			},
			{
				id: mockCategory2.id,
				name: mockCategory2.name,
				description: mockCategory2.description,
			},
		];

		const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);

		const result = await listCategoriesUseCase.execute();

		expect(result).toHaveLength(2);
		expect(result).toEqual(categories);
	});

	it("should return an empty array when no categories are found", async () => {
		const categoryRepository = new InMemoryCategoryRepository();

		const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);

		const result = await listCategoriesUseCase.execute();

		expect(result).toEqual([]);
	});
});
