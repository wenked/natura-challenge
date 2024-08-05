import type { Router } from "express";
import { ListProductsControllerFactory } from "../factories/list-products-controller-factory";
import { validate } from "../middlewares";
import { listProductsSchema } from "../validators/products/products.schema";

export function productsRouterFactory(router: Router) {
	const listProductsController = ListProductsControllerFactory();

	router.get(
		"/products",
		[validate(listProductsSchema)],
		listProductsController.handle,
	);
}
