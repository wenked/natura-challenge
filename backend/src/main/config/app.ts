import cors from 'cors';
import express from 'express';
import path from 'node:path';

import { errorMiddleware } from '../../presentation/middlewares';
import { setupRoutes } from '../../presentation/routes/setup-routes';

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: false }));

app.use(express.json());
app.use(cors());
app.use(
  '/api/public',
  express.static(path.join(__dirname, '..', '..', '..', 'public')),
);

setupRoutes(app);
app.use(errorMiddleware);

export default app;
