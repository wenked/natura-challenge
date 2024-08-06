import type { Router } from "express";
import { adaptRoute } from "../../main/adapters/express-route-adapter";
import { ListProductsControllerFactory } from "../factories/list-products-controller-factory";
import { validate } from "../middlewares";
import { listProductsSchema } from "../validators/products/products.schema";

export function createProductsRoutes(router: Router) {
	const listProductsController = ListProductsControllerFactory();

	router.get(
		"/products",
		[validate(listProductsSchema)],
		adaptRoute(listProductsController),
	);
}
