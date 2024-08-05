export class ApplicationError extends Error {
	constructor(
		message: string,
		public code: string,
		public statusCode: number,
	) {
		super(message);
		this.name = this.constructor.name;
		this.statusCode = statusCode;
	}
}
