import dotenv from "dotenv";
import z from "zod";

dotenv.config();

const envSchema = z.object({
	PORT: z.coerce.number().default(5001),
	DB_NAME: z.string().default("natura-dev"),
	DB_USERNAME: z.string().default("username"),
	DB_PASSWORD: z.string().default("password"),
	DB_HOST: z.string().default("localhost"),
	DB_PORT: z.coerce.number().default(5432),
	TEST_DB_NAME: z.string().default("natura-test"),
	TEST_DB_USERNAME: z.string().default("test_user"),
	TEST_DB_PASSWORD: z.string().default("test_password"),
	TEST_DB_HOST: z.string().default("localhost"),
	TEST_DB_PORT: z.coerce.number().default(5433),
});

const env = envSchema.parse(process.env);

export default env;
