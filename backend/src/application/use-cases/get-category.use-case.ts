import { NotFoundError } from "../../domain/errors/not-found-error";
import type { ICategoryRepository } from "../interfaces/category-repository.interface";

export class GetCategoryUseCase {
	constructor(private categoryRepository: ICategoryRepository) {}

	async execute(id: string) {
		const category = await this.categoryRepository.findById(id, [
			"id",
			"name",
			"description",
		]);

		if (!category) {
			throw new NotFoundError("Category");
		}

		return category;
	}
}
