import { ListProductsUseCase } from "../../application/use-cases/list-products.use-case";
import { ProductRepository } from "../../infrastructure/repositories/product/product.repository";
import { ListProductsController } from "../controllers/list-products-controller";

export function ListProductsControllerFactory(): ListProductsController {
	const productRepository = new ProductRepository();
	const useCase = new ListProductsUseCase(productRepository);

	const listProductsController = new ListProductsController(useCase);

	return listProductsController;
}
