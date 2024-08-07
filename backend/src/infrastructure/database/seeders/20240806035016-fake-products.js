/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesFolder = fs.readdirSync(
      path.resolve(__dirname, '..', '..', '..', '..', 'public', 'images'),
    );

    for (const categoryFolder of categoriesFolder) {
      const categoriesImages = fs.readdirSync(
        path.resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'public',
          'images',
          categoryFolder,
        ),
      );

      const category = await queryInterface.sequelize.query(
        'SELECT id FROM categories WHERE name ILIKE :categoryName',
        {
          replacements: { categoryName: `%${categoryFolder}%` },
          type: Sequelize.QueryTypes.SELECT,
          logging: true,
        },
      );

      if (category.length === 0) continue;

      const discounts = [
        null,
        null,
        null,
        null,
        null,
        null,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
      ];
      const ratings = [4, 4.5, 5];

      for (const categoryImage of categoriesImages) {
        const productName = categoryImage.split('.')[0];

        const [newProduct] = await queryInterface.bulkInsert(
          'products',
          [
            {
              name: productName,
              price: Math.floor(Math.random() * 10000),
              description: 'Lorem ipsum dolor sit amet',
              rating: ratings[Math.floor(Math.random() * ratings.length)],
              discount: discounts[Math.floor(Math.random() * discounts.length)],
              category_id: category[0].id,
              created_at: new Date(),
              updated_at: new Date(),
            },
          ],
          { returning: true },
        );

        await queryInterface.bulkInsert('product_images', [
          {
            product_id: newProduct.id,
            url: `${process.env.API_URL}/api/public/images/${categoryFolder}/${categoryImage}`,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ]);
      }
    }
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('ProductImages', null, {});
    await queryInterface.bulkDelete('Products', null, {});
  },
};
