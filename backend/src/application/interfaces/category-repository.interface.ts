import type { Category } from "../../domain/entities/category.entitiy";

export type CategoryFields =
	| "id"
	| "name"
	| "description"
	| "createdAt"
	| "updatedAt";

export interface ICategoryRepository {
	create(
		category: Omit<Category, "id" | "createdAt" | "updatedAt">,
	): Promise<Category>;
	findById(id: string, attributes: CategoryFields[]): Promise<Category | null>;
	findAll(attributes: CategoryFields[]): Promise<Category[]>;
	update(id: string, category: Partial<Category>): Promise<Category | null>;
	delete(id: string): Promise<boolean>;
}
