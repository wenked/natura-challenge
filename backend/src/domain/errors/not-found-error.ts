import { ApplicationError } from "./application-error";

export class NotFoundError extends ApplicationError {
	constructor(entity: string) {
		super(`${entity} not found`, "NOT_FOUND", 404);
	}
}
