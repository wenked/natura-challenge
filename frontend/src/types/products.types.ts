export interface IGetProducts {
  page?: number;
  limit?: number;
  name?: string;
  categoryId?: string;
}

export interface IProductImage {
  id: string;
  url: string;
  productId?: string;
}

export interface IProduct {
  id: string;
  name?: string;
  description?: string;
  price?: string;
  categoryId?: string;
  images?: IProductImage[];
  rating?: number;
  discount?: number;
}

export interface IGetProductsResponse {
  data: IProduct[];
  total: number;
  pages: number;
}
