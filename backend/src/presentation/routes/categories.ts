import type { Router } from 'express';

import { adaptRoute } from '../../main/adapters/express-route-adapter';
import { ListCategoriesControllerFactory } from '../factories/list-categories-controller-factory';

export function createCategoriesRoutes(router: Router) {
  const listCategoriesController = ListCategoriesControllerFactory();

  router.get('/categories', adaptRoute(listCategoriesController));
}
