import type { ProductImage } from './product-image.entity';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  rating?: number;
  discount?: number;
  images?: ProductImage[];
  createdAt: Date;
  updatedAt: Date;
}
