import { Op, type WhereOptions } from 'sequelize';

import type { IProductRepository } from '../../../application/interfaces/product-repository.interface';
import type { Product as ProductEntity } from '../../../domain/entities/product.entity';
import type {
  IProductFindAll,
  IProductFindAllResponse,
  ProductFields,
} from '../../../domain/interfaces/products';
import { ProductImage } from '../../database/models/product-images.model';
import { Product as ProductModel } from '../../database/models/product.model';

export class ProductRepository implements IProductRepository {
  async create(product: Omit<ProductEntity, 'id' | 'createdAt' | 'updatedAt'>) {
    const newProduct = await ProductModel.create(product);

    return this.toEntity(newProduct);
  }

  async findById(
    id: string,
    attributes: ProductFields[],
  ): Promise<Partial<ProductEntity> | null> {
    const product = await ProductModel.findByPk(id, {
      attributes,
      include: [ProductImage],
    });

    return product ? this.toEntity(product) : null;
  }

  async findAll({
    page,
    limit,
    categoryId,
    name,
    attributes,
  }: IProductFindAll): Promise<IProductFindAllResponse> {
    const where: WhereOptions<ProductModel> = {};

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (name) {
      where.name = {
        [Op.iLike]: `%${name}%`,
      };
    }
    console.log({ attributes });
    const products = await ProductModel.findAndCountAll({
      where,
      attributes,
      include: [ProductImage],
      limit,
      offset: (page - 1) * limit,
    });

    return {
      total: products.count,
      data: products.rows.map(product => this.toEntity(product)),
      pages: Math.ceil(products.count / limit),
    };
  }

  async update(
    id: string,
    product: Partial<ProductEntity>,
  ): Promise<ProductEntity | null> {
    const findProduct = await ProductModel.findByPk(id);

    if (!findProduct) {
      return null;
    }

    const updatedProduct = await findProduct.update(product);

    return this.toEntity(updatedProduct);
  }

  async delete(id: string): Promise<boolean> {
    const result = await ProductModel.destroy({
      where: {
        id,
      },
    });

    return result > 0;
  }

  private toEntity(model: ProductModel): ProductEntity {
    return {
      id: model.id,
      categoryId: model.categoryId,
      name: model.name,
      description: model.description,
      discount: Number(model.discount),
      rating: Number(model.rating),
      price: model.price,
      images: model.images,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    };
  }
}
