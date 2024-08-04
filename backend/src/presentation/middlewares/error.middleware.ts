import type { NextFunction, Request, Response } from "express";
import { logger } from "../../utils";

export async function errorMiddleware(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> {
	logger.error(err.message);

	res.status(500).json({
		message: "Internal server error",
		code: "INTERNAL_SERVER_ERROR",
	});
}
