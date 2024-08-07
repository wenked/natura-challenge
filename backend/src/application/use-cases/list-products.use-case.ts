import type { ProductFields } from '../../domain/interfaces/products';
import { formatPrice } from '../../utils/formatPrice';
import type { IProductRepository } from '../interfaces/product-repository.interface';

export class ListProductsUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({
    page,
    limit,
    categoryId,
    attributes,
    searchParam,
  }: {
    page: number;
    limit: number;
    attributes: ProductFields[];
    categoryId?: string;
    searchParam?: string;
  }) {
    const products = await this.productRepository.findAll({
      page,
      limit,
      categoryId,
      attributes,
      searchParam,
    });
    console.log(JSON.stringify(products, null, 2));

    const formattedProducts = products.data.map(product => ({
      ...product,
      price: product.price ? formatPrice(product.price) : undefined,
    }));

    return {
      total: products.total,
      data: formattedProducts,
      pages: products.pages,
    };
  }
}
