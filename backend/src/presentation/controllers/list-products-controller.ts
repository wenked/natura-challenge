import type { NextFunction, Request, Response } from "express";
import type { ListProductsUseCase } from "../../application/use-cases/list-products.use-case";
import type { IProductFindAllResponse } from "../../domain/interfaces/products";

export class ListProductsController {
	constructor(private listProductsUseCase: ListProductsUseCase) {}

	async handle(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response<IProductFindAllResponse> | undefined> {
		try {
			console.log({ body: req.body });
			console.log({ query: req.query });
			console.log({ params: req.params });
			const page = Number(req.query.page);
			const limit = Number(req.query.limit);
			const name = req.query.name as string;
			const categoryId = req.query.categoryId as string;
			console.log({ listProductsUseCase: this.listProductsUseCase });
			console.log({
				page,
				limit,
				name,
				categoryId,
			});

			const products = await this.listProductsUseCase.execute({
				page,
				limit,
				name,
				categoryId,
				attributes: ["id", "name", "price", "description"],
			});

			return res.status(200).json(products);
		} catch (error) {
			next(error);
		}
	}
}
