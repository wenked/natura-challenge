import cors from "cors";
import express from "express";
import { errorMiddleware } from "../../presentation/middlewares";

const app = express();

app.use(express.json());
// cors
app.use(cors());
app.use(errorMiddleware);

export default app;
