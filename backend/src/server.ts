import dotenv from "dotenv";
import env from "./config/ENV";
import { sequelize } from "./infrastructure/database/sequelize.config";
import app from "./main/config/app";
import { logger } from "./utils";
import { createFakeProductsData } from "./utils/createFakeProductsData";

dotenv.config();

const PORT = env.PORT || 5001;

async function startServer() {
	try {
		await sequelize.authenticate();
		await createFakeProductsData();
		logger.info("Database connection has been established successfully.");
		await sequelize.sync();
		logger.info("All models were synchronized successfully.");

		app.listen(PORT, () => {
			logger.info(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		logger.error("Unable to connect to the database:", error);
	}
}

startServer();
