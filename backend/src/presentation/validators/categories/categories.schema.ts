import { z } from 'zod';

export const listCategoriesSchema = z.object({
  query: z.object({
    attributes: z
      .array(z.enum(['id', 'name', 'description', 'createdAt', 'updatedAt']))
      .default(['id', 'name', 'description']),
  }),
});
