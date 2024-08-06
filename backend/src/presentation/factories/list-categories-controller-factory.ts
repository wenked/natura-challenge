import { ListCategoriesUseCase } from "../../application/use-cases/list-category.use-case";
import { CategoryRepository } from "../../infrastructure/repositories/category/category.repository";
import { ListCategoriesController } from "../../presentation/controllers/list-categories-controller";

export function ListCategoriesControllerFactory(): ListCategoriesController {
	const categoriesRepository = new CategoryRepository();
	const useCase = new ListCategoriesUseCase(categoriesRepository);
	const listCategoriesController = new ListCategoriesController(useCase);

	return listCategoriesController;
}
