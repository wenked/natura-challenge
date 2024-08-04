import type { Options } from "sequelize";
import env from "./ENV";

const config: Options = {
	database: env.DB_HOST,
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
};

export default config;
