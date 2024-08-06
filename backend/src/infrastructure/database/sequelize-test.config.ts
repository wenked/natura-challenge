import { PostgreSqlContainer } from "@testcontainers/postgresql";
import { Sequelize } from "sequelize-typescript";

import { Category } from "./models/category.model";
import { ProductImage } from "./models/product-images.model";
import { Product } from "./models/product.model";

export async function setupTestDatabase() {
	try {
		const container = await new PostgreSqlContainer().start();

		const sequelize = new Sequelize({
			dialect: "postgres",
			host: container.getHost(),
			port: container.getPort(),
			username: container.getUsername(),
			password: container.getPassword(),
			database: container.getDatabase(),
			logging: false,
			models: [Category, Product, ProductImage],
		});

		await sequelize.sync({ force: true });

		await sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

		return sequelize;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		throw error;
	}
}
