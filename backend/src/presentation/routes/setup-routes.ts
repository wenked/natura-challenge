import { type Express, Router } from 'express';

import { createCategoriesRoutes } from './categories';
import { createProductsRoutes } from './products';

export function setupRoutes(app: Express): void {
  const router = Router();
  app.use('/api', router);

  createProductsRoutes(router);
  createCategoriesRoutes(router);
}
