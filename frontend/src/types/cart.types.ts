import { IProduct } from './products.types';

export interface ICartProduct {
  quantity: number;
  product: IProduct;
}
