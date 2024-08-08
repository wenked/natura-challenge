export interface IProduct {
  id: string;
  name?: string;
  description?: string;
  price: number;
  oldPrice?: string;
  formatedPrice?: string;
  categoryId?: string;
  images: IProductImage[];
  rating: number;
  discount?: number;
  discountValue?: number;
}

export interface IGetProducts {
  page?: number;
  limit?: number;
  searchParam?: string;
  categoryId?: string;
  attributes?: string[];
}

export interface IProductImage {
  id: string;
  url: string;
  productId?: string;
}

export interface IGetProductsResponse {
  data: IProduct[];
  total: number;
  pages: number;
  currentPage: number;
  nextPage: number;
  hasNextPage: boolean;
}
