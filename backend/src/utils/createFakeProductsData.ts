import fs from 'node:fs';
import path from 'node:path';
import { Op } from 'sequelize';

import { Category } from '../infrastructure/database/models/category.model';
import { ProductImage } from '../infrastructure/database/models/product-images.model';
import { Product } from '../infrastructure/database/models/product.model';

export async function createFakeProductsData() {
  const categoriesFolder = fs.readdirSync(
    path.resolve(__dirname, '..', '..', 'public', 'images'),
  );

  const products = categoriesFolder.map(async categoriesFolder => {
    const categoriesImages = fs.readdirSync(
      path.resolve(__dirname, '..', '..', 'public', 'images', categoriesFolder),
    );

    const categoryProducts = categoriesImages.map(async categoryImage => {
      const productName = categoryImage.split('.')[0];

      const category = await Category.findOne({
        where: {
          name: {
            [Op.like]: `%${categoriesFolder}%`,
          },
        },
      });

      if (!category) {
        return;
      }

      const newProduct = await Product.create({
        name: productName,
        price: Math.floor(Math.random() * 10000),
        description: 'Lorem ipsum dolor sit amet',
        categoryId: category.id,
      });

      await ProductImage.create({
        productId: newProduct.id,
        url: `${process.env.API_URL}/api/public/images/${categoriesFolder}/${categoryImage}`,
      });
    });

    await Promise.all(categoryProducts);
  });

  await Promise.all(products);
}
