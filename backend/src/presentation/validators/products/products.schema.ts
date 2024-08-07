import { z } from 'zod';

export const listProductsSchema = z.object({
  query: z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(12),
    searchParam: z.string().optional(),
    categoryId: z.string().optional(),
    attributes: z
      .array(
        z.enum([
          'id',
          'name',
          'price',
          'description',
          'images',
          'discount',
          'rating',
          'createdAt',
          'updatedAt',
        ]),
      )
      .default([
        'id',
        'name',
        'price',
        'description',
        'images',
        'discount',
        'rating',
      ]),
  }),
});
