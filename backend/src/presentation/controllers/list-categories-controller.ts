import type { ListCategoriesUseCase } from '../../application/use-cases/list-category.use-case';
import type { Controller } from '../ports/controller';
import type { HttpResponse } from '../ports/http-response';

export class ListCategoriesController implements Controller {
  constructor(private readonly listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(): Promise<HttpResponse> {
    try {
      const categories = await this.listCategoriesUseCase.execute();

      return {
        statusCode: 200,
        data: categories,
      };
    } catch (error) {
      console.error(error);

      return {
        statusCode: 500,
        data: {
          message: 'Internal server error',
        },
      };
    }
  }
}
