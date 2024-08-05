export interface Category {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
}

export type CategoryFields = keyof Category;
