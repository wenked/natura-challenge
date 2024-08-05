import type {
	Category,
	CategoryFields,
} from "../../domain/entities/category.entitiy";

export interface ICategoryRepository {
	create(
		category: Omit<Category, "id" | "createdAt" | "updatedAt">,
	): Promise<Category>;
	findById(
		id: string,
		attributes: CategoryFields[],
	): Promise<Partial<Category> | null>;
	findAll(attributes: CategoryFields[]): Promise<Partial<Category>[]>;
	update(id: string, category: Partial<Category>): Promise<Category | null>;
	delete(id: string): Promise<boolean>;
}
