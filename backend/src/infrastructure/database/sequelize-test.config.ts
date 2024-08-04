import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { Sequelize } from "sequelize-typescript";

import { Category } from "./models/category.model";
import { ProductImage } from "./models/product-images.model";
import { Product } from "./models/product.model";

export async function setupTestDatabase() {
	try {
		const container = await new PostgreSqlContainer().start();
		console.log({ container });
		const sequelize = new Sequelize({
			dialect: "postgres",
			host: container.getHost(),
			port: container.getPort(),
			username: container.getUsername(),
			password: container.getPassword(),
			database: container.getDatabase(),
			logging: false,
		});

		sequelize.addModels([Category, Product, ProductImage]);

		await sequelize.sync({ force: true });

		return sequelize;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		throw error;
	}
}
