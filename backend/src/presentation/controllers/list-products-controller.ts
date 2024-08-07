import type { ListProductsUseCase } from '../../application/use-cases/list-products.use-case';
import type { ProductFields } from '../../domain/interfaces/products';
import type { Controller } from '../ports/controller';
import type { HttpRequest } from '../ports/http-request';
import type { HttpResponse } from '../ports/http-response';

export class ListProductsController implements Controller {
  constructor(private useCase: ListProductsUseCase) {}

  async handle(
    request: HttpRequest<
      unknown,
      unknown,
      {
        page: number;
        limit: number;
        name?: string;
        categoryId?: string;
        attributes: ProductFields[];
      }
    >,
  ): Promise<HttpResponse> {
    try {
      if (!request.query) {
        return {
          statusCode: 400,
          data: {
            message: 'Missing query parameters',
          },
        };
      }

      const { page, limit, name, categoryId, attributes } = request.query;

      const products = await this.useCase.execute({
        page,
        limit,
        name,
        categoryId,
        attributes,
      });

      return {
        statusCode: 200,
        data: products,
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
