import type { Sequelize } from 'sequelize-typescript';
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import type { IProductFindAllResponse } from '../../../domain/interfaces/products';
import { Product } from '../../database/models/product.model';
import { setupTestDatabase } from '../../database/sequelize-test.config';
import { CategoryRepository } from '../category/category.repository';
import { ProductRepository } from './product.repository';

describe('ProductRepository Integration Tests', () => {
  let sequelize: Sequelize;
  let repository: ProductRepository;
  let categoryRepository: CategoryRepository;

  beforeAll(async () => {
    await vi.waitFor(
      async () => {
        sequelize = await setupTestDatabase();

        expect(sequelize).toBeDefined();
      },
      {
        timeout: 10000,
        interval: 60,
      },
    );

    repository = new ProductRepository();
    categoryRepository = new CategoryRepository();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await Product.destroy({ where: {} });
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const newProduct = await repository.create({
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        categoryId: category.id,
      });

      expect(newProduct).toHaveProperty('id');
      expect(newProduct.name).toBe('Test Product');
      expect(newProduct.categoryId).toBe(category.id);
      expect(newProduct.description).toBe('Test Description');
      expect(newProduct.price).toBe(100);
    });
  });

  describe('findById', () => {
    it('should find a product by id', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const createdProduct = await repository.create({
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        categoryId: category.id,
      });

      const foundProduct = await repository.findById(createdProduct.id, [
        'id',
        'name',
      ]);

      expect(foundProduct).not.toBeNull();
      expect(foundProduct?.id).toBe(createdProduct.id);
      expect(foundProduct?.name).toBe('Test Product');
    });

    it('should return null if product is not found', async () => {
      const foundProduct = await repository.findById(
        '058d31b0-51c2-47e5-b295-e45f52700da2',
        ['id', 'name'],
      );

      expect(foundProduct).toBeNull();
    });
  });

  describe('findAll', () => {
    it('should return all products with pagination', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const product1 = await repository.create({
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        categoryId: category.id,
      });

      const product2 = await repository.create({
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        categoryId: category.id,
      });

      const products = await repository.findAll({
        attributes: ['id', 'name', 'price', 'description', 'categoryId'],
        limit: 10,
        page: 1,
      });

      const response: IProductFindAllResponse = {
        data: [
          {
            id: product1.id,
            name: product1.name,
            price: product1.price,
            description: product1.description,
            categoryId: product1.categoryId,
            images: [],
          },
          {
            id: product2.id,
            name: product2.name,
            price: product2.price,
            description: product2.description,
            categoryId: product2.categoryId,
            images: [],
          },
        ],
        total: 2,
        pages: 1,
      };

      expect(products.data).toHaveLength(2);
      expect(products.total).toBe(2);
      expect(products.pages).toBe(1);
      expect(products).toEqual(response);
    });

    it('should return all products with provided categoryId', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const category2 = await categoryRepository.create({
        name: 'Test Category 2',
        description: 'Test Description 2',
      });

      const product1 = await repository.create({
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        categoryId: category.id,
      });

      await repository.create({
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        categoryId: category2.id,
      });

      const products = await repository.findAll({
        attributes: ['id', 'name'],
        limit: 10,
        page: 1,
        categoryId: category.id,
      });

      const response: IProductFindAllResponse = {
        data: [{ id: product1.id, name: 'Product 1', images: [] }],
        total: 1,
        pages: 1,
      };

      expect(products.data).toHaveLength(1);
      expect(products.total).toBe(1);
      expect(products.pages).toBe(1);
      expect(products).toEqual(response);
    });

    it('should return all products with provided name', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const product1 = await repository.create({
        name: 'Product 1',
        description: 'Description 1',
        price: 100,
        categoryId: category.id,
      });

      await repository.create({
        name: 'Product 2',
        description: 'Description 2',
        price: 200,
        categoryId: category.id,
      });

      const products = await repository.findAll({
        attributes: ['id', 'name'],
        limit: 12,
        page: 1,
        searchParam: 'Product 1',
      });

      const response: IProductFindAllResponse = {
        data: [{ id: product1.id, name: 'Product 1', images: [] }],
        total: 1,
        pages: 1,
      };

      expect(products.data).toHaveLength(1);
      expect(products.total).toBe(1);
      expect(products.pages).toBe(1);
      expect(products).toEqual(response);
    });
  });

  describe('update', () => {
    it('should update a product', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const createdProduct = await repository.create({
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        categoryId: category.id,
      });

      const updatedProduct = await repository.update(createdProduct.id, {
        name: 'Updated Product',
        description: 'Updated Description',
        price: 200,
      });

      expect(updatedProduct).not.toBeNull();
      expect(updatedProduct?.id).toBe(createdProduct.id);
      expect(updatedProduct?.name).toBe('Updated Product');
      expect(updatedProduct?.description).toBe('Updated Description');
      expect(updatedProduct?.price).toBe(200);
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      const category = await categoryRepository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const createdProduct = await repository.create({
        name: 'Test Product',
        description: 'Test Description',
        price: 100,
        categoryId: category.id,
      });

      const result = await repository.delete(createdProduct.id);

      expect(result).toBe(true);
    });

    it('should return false if product is not found', async () => {
      const result = await repository.delete(
        '058d31b0-51c2-47e5-b295-e45f52700da2',
      );

      expect(result).toBe(false);
    });
  });
});
