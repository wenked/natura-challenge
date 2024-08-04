import type {
	CategoryFields,
	ICategoryRepository,
} from "../../application/interfaces/category-repository.interface";
import type { Category as CategoryEntity } from "../../domain/entities/category.entitiy";
import { Category as CategoryModel } from "../database/models/category.model";

export class CategoryRepository implements ICategoryRepository {
	async create(
		category: Omit<CategoryEntity, "id" | "createdAt" | "updatedAt">,
	): Promise<CategoryEntity> {
		const model = await CategoryModel.create(category);
		return this.toEntity(model);
	}

	async findById(
		id: string,
		attributes: CategoryFields[],
	): Promise<CategoryEntity | null> {
		const model = await CategoryModel.findByPk(id, {
			attributes,
		});
		return model ? this.toEntity(model) : null;
	}

	async findAll(attributes: CategoryFields[]): Promise<CategoryEntity[]> {
		const categories = await CategoryModel.findAll({
			attributes,
		});

		return categories.map((category) => this.toEntity(category));
	}

	async update(
		id: string,
		category: Partial<CategoryEntity>,
	): Promise<CategoryEntity | null> {
		const findCategory = await CategoryModel.findByPk(id);

		if (!findCategory) {
			return null;
		}

		await findCategory.update(category);

		return this.toEntity(findCategory);
	}

	async delete(id: string): Promise<boolean> {
		const result = await CategoryModel.destroy({
			where: {
				id,
			},
		});

		return result > 0;
	}

	private toEntity(model: CategoryModel): CategoryEntity {
		return {
			id: model.id,
			name: model.name,
			description: model.description,
			createdAt: model.createdAt,
			updatedAt: model.updatedAt,
		};
	}
}
