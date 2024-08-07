import type { ICategoryRepository } from '../interfaces/category-repository.interface';

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute() {
    return this.categoryRepository.findAll(['id', 'name', 'description']);
  }
}
