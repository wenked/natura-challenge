import type { Sequelize } from 'sequelize-typescript';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { Category } from '../../database/models/category.model';
import { setupTestDatabase } from '../../database/sequelize-test.config';
import { CategoryRepository } from './category.repository';

describe('CategoryRepository Integration Tests', () => {
  let sequelize: Sequelize;
  let repository: CategoryRepository;

  beforeAll(async () => {
    sequelize = await setupTestDatabase();
    repository = new CategoryRepository();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  beforeEach(async () => {
    await Category.destroy({ where: {} });
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const newCategory = await repository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      expect(newCategory).toHaveProperty('id');
      expect(newCategory.name).toBe('Test Category');
      expect(newCategory.description).toBe('Test Description');
    });
  });

  describe('findById', () => {
    it('should find a category by id', async () => {
      const createdCategory = await repository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const foundCategory = await repository.findById(createdCategory.id, [
        'id',
        'name',
      ]);

      expect(foundCategory).not.toBeNull();
      expect(foundCategory?.id).toBe(createdCategory.id);
      expect(foundCategory?.name).toBe('Test Category');
    });

    it('should return null if category is not found', async () => {
      const foundCategory = await repository.findById(
        '058d31b0-51c2-47e5-b295-e45f52700da2',
        ['id', 'name'],
      );

      expect(foundCategory).toBeNull();
    });
  });

  describe('findAll', () => {
    it('should return all categories', async () => {
      await repository.create({
        name: 'Category 1',
        description: 'Description 1',
      });
      await repository.create({
        name: 'Category 2',
        description: 'Description 2',
      });

      const categories = await repository.findAll(['name']);

      expect(categories).toHaveLength(2);
      expect(categories[0].name).toBe('Category 1');
      expect(categories[1].name).toBe('Category 2');
    });
  });

  describe('update', () => {
    it('should update a category', async () => {
      const createdCategory = await repository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const updatedCategory = await repository.update(createdCategory.id, {
        name: 'Updated Category',
        description: 'Updated Description',
      });

      expect(updatedCategory).not.toBeNull();
      expect(updatedCategory?.id).toBe(createdCategory.id);
      expect(updatedCategory?.name).toBe('Updated Category');
      expect(updatedCategory?.description).toBe('Updated Description');
    });

    it('should return null if category is not found', async () => {
      const updatedCategory = await repository.update(
        '058d31b0-51c2-47e5-b295-e45f52700da2',
        {
          name: 'Updated Category',
          description: 'Updated Description',
        },
      );

      expect(updatedCategory).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete a category', async () => {
      const createdCategory = await repository.create({
        name: 'Test Category',
        description: 'Test Description',
      });

      const isDeleted = await repository.delete(createdCategory.id);

      expect(isDeleted).toBe(true);
    });

    it('should return false if category is not found', async () => {
      const isDeleted = await repository.delete(
        '058d31b0-51c2-47e5-b295-e45f52700da2',
      );

      expect(isDeleted).toBe(false);
    });
  });
});
