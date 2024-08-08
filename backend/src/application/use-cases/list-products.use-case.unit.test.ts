import { describe, expect, it } from 'vitest';

import { InMemoryCategoryRepository } from '../../infrastructure/repositories/category/in-memory.category.repository';
import { InMemoryProductRepository } from '../../infrastructure/repositories/product/in-memory.product.repository';
import { formatPrice } from '../../utils/formatPrice';
import { ListProductsUseCase } from './list-products.use-case';

describe('ListProductsUseCase', () => {
  it('should return all products with specified attributes', async () => {
    const categoryRepository = new InMemoryCategoryRepository();
    const productRepository = new InMemoryProductRepository();

    const category = await categoryRepository.create({
      name: 'Test Category',
      description: 'Test Description',
    });

    const mockProduct1 = await productRepository.create({
      name: 'Product 1',
      price: 100,
      description: 'Description 1',
      categoryId: category.id,
    });

    const mockProduct2 = await productRepository.create({
      name: 'Product 2',
      price: 200,
      description: 'Description 2',
      categoryId: category.id,
    });

    const products = [
      {
        id: mockProduct1.id,
        name: mockProduct1.name,
        price: mockProduct1.price,
        discountValue: undefined,
        formatedPrice: formatPrice(mockProduct1.price),
        oldPrice: undefined,
      },
      {
        id: mockProduct2.id,
        name: mockProduct2.name,
        price: mockProduct2.price,
        discountValue: undefined,
        formatedPrice: formatPrice(mockProduct2.price),
      },
    ];

    const listProductsUseCase = new ListProductsUseCase(productRepository);

    const result = await listProductsUseCase.execute({
      attributes: ['id', 'name', 'price'],
      page: 1,
      limit: 10,
    });

    expect(result).toEqual({
      data: products,
      total: 2,
      pages: 1,
      hasNextPage: false,
      currentPage: 1,
      nextPage: 2,
    });
  });

  it('should return an empty array when no products are found', async () => {
    const productRepository = new InMemoryProductRepository();

    const listProductsUseCase = new ListProductsUseCase(productRepository);

    const result = await listProductsUseCase.execute({
      attributes: ['id', 'name', 'price'],
      page: 1,
      limit: 10,
    });

    expect(result).toEqual({
      data: [],
      total: 0,
      pages: 0,
      currentPage: 1,
      hasNextPage: false,
      nextPage: 2,
    });
  });
});
