import type { Sequelize } from "sequelize-typescript";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { Category } from "../database/models/category.model";
import { setupTestDatabase } from "../database/sequelize-test.config";
import { CategoryRepository } from "./category.repository";

describe("CategoryRepository Integration Tests", () => {
	let sequelize: Sequelize;
	let repository: CategoryRepository;

	beforeAll(async () => {
		sequelize = await setupTestDatabase();
		repository = new CategoryRepository();
	});

	afterAll(async () => {
		await sequelize.close();
	});

	beforeEach(async () => {
		await Category.destroy({ where: {}, truncate: true });
	});

	describe("create", () => {
		it("should create a new category", async () => {
			const newCategory = await repository.create({
				name: "Test Category",
				description: "Test Description",
			});

			expect(newCategory).toHaveProperty("id");
			expect(newCategory.name).toBe("Test Category");
			expect(newCategory.description).toBe("Test Description");
		});
	});

	describe("findById", () => {
		it("should find a category by id", async () => {
			const createdCategory = await repository.create({
				name: "Test Category",
				description: "Test Description",
			});

			const foundCategory = await repository.findById(createdCategory.id, [
				"id",
				"name",
			]);

			expect(foundCategory).not.toBeNull();
			expect(foundCategory?.id).toBe(createdCategory.id);
			expect(foundCategory?.name).toBe("Test Category");
		});

		it("should return null if category is not found", async () => {
			const foundCategory = await repository.findById(
				"058d31b0-51c2-47e5-b295-e45f52700da2",
				["id", "name"],
			);

			expect(foundCategory).toBeNull();
		});
	});

	describe("findAll", () => {
		it("should return all categories", async () => {
			await repository.create({
				name: "Category 1",
				description: "Description 1",
			});
			await repository.create({
				name: "Category 2",
				description: "Description 2",
			});

			const categories = await repository.findAll(["name"]);

			expect(categories).toHaveLength(2);
			expect(categories[0].name).toBe("Category 1");
			expect(categories[1].name).toBe("Category 2");
		});
	});
});
