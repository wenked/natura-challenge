import { calculateOldPrice } from 'utils/calculateOldPrice';

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

    const formattedProducts = products.data.map(product => ({
      ...product,
      oldPrice:
        product.discount && product.price
          ? calculateOldPrice(product.price, product.discount)
          : undefined,
      price: product.price ? formatPrice(product.price) : undefined,
    }));

    return {
      total: products.total,
      data: formattedProducts,
      pages: products.pages,
      currentPage: page,
      nextPage: page + 1,

      hasNextPage: page < products.pages,
    };
  }
}
