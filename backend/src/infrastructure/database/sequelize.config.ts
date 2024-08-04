import { Sequelize } from "sequelize-typescript";
import env from "../../config/ENV";

export const sequelize = new Sequelize({
	database: env.DB_NAME,
	dialect: "postgres",
	username: env.DB_USERNAME,
	password: env.DB_PASSWORD,
	host: env.DB_HOST,
	port: env.DB_PORT,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
	},
	models: [`${__dirname}/../domain/entities`],
});
