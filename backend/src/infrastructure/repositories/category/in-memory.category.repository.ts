import { randomUUID } from "node:crypto";
import type { ICategoryRepository } from "../../../application/interfaces/category-repository.interface";
import type {
	Category,
	Category as CategoryEntity,
	CategoryFields,
} from "../../../domain/entities/category.entitiy";

export class InMemoryCategoryRepository implements ICategoryRepository {
	private categories: Map<string, CategoryEntity> = new Map();

	async create(
		category: Omit<CategoryEntity, "id" | "createdAt" | "updatedAt">,
	): Promise<CategoryEntity> {
		const id = randomUUID();
		const newCategory: CategoryEntity = {
			id,
			...category,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		this.categories.set(id, newCategory);

		return newCategory;
	}

	async findById(
		id: string,
		attributes: CategoryFields[],
	): Promise<Partial<Category> | null> {
		const category = this.categories.get(id);

		if (!category) {
			return null;
		}

		return this.filterAttributes(category, attributes);
	}

	async findAll(attributes: CategoryFields[]): Promise<Partial<Category>[]> {
		const categories = Array.from(this.categories.values());

		return categories.map((category) =>
			this.filterAttributes(category, attributes),
		);
	}

	async update(
		id: string,
		category: Partial<CategoryEntity>,
	): Promise<CategoryEntity | null> {
		const existingCategory = this.categories.get(id);

		if (!existingCategory) {
			return null;
		}

		const updatedCategory: CategoryEntity = {
			...existingCategory,
			...category,
			updatedAt: new Date(),
		};

		this.categories.set(id, updatedCategory);
		return updatedCategory;
	}

	async delete(id: string): Promise<boolean> {
		return this.categories.delete(id);
	}

	private filterAttributes(
		category: CategoryEntity,
		attributes: CategoryFields[],
	): Partial<CategoryEntity> {
		const filteredCategory: Partial<CategoryEntity> = {};

		if (attributes.includes("id")) {
			filteredCategory.id = category.id;
		}

		if (attributes.includes("name")) {
			filteredCategory.name = category.name;
		}

		if (attributes.includes("description")) {
			filteredCategory.description = category.description;
		}

		if (attributes.includes("createdAt")) {
			filteredCategory.createdAt = category.createdAt;
		}

		if (attributes.includes("createdAt")) {
			filteredCategory.updatedAt = category.updatedAt;
		}

		return filteredCategory;
	}
}
