import type { Product } from '../../domain/entities/product.entity';
import type {
  IProductFindAll,
  IProductFindAllResponse,
  ProductFields,
} from '../../domain/interfaces/products';

export interface IProductRepository {
  create(
    product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Product>;
  findById(
    id: string,
    attributes: ProductFields[],
  ): Promise<Partial<Product> | null>;
  findAll({
    page,
    limit,
    searchParam,
    categoryId,
    attributes,
  }: IProductFindAll): Promise<IProductFindAllResponse>;
  update(id: string, product: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}
