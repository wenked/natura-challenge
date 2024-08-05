import type { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../domain/errors/application-error";
import { NotFoundError } from "../../domain/errors/not-found-error";
import { logger } from "../../utils";

interface ErrorResponse {
	message: string;
	code: string;
}

export async function errorMiddleware(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response<ErrorResponse>> {
	console.error(error);
	logger.error(error.message);

	if (error instanceof NotFoundError) {
		return res.status(404).json({
			message: error.message,
			code: error.code,
		});
	}

	if (error instanceof ApplicationError) {
		return res.status(400).json({
			message: error.message,
			code: error.code,
		});
	}

	return res.status(500).json({
		message: "Internal server error",
		code: "INTERNAL_SERVER_ERROR",
	});
}
