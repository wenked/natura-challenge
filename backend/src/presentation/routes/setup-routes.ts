import { type Express, Router } from "express";
import { productsRouterFactory } from "./products";

export function setupRoutes(app: Express): void {
	const router = Router();
	app.use("/api", router);

	productsRouterFactory(router);
}
