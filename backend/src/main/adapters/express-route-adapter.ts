import type { Request, Response } from "express";
import type { Controller } from "../../presentation/ports/controller";
import type { HttpRequest } from "../../presentation/ports/http-request";

export function adaptRoute(controller: Controller) {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: req?.params,
			query: req?.query,
		};

		const httpResponse = await controller.handle(httpRequest);
		res.status(httpResponse.statusCode).json(httpResponse.data);
	};
}
