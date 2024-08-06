import console from "node:console";
import fs from "node:fs";
import path from "node:path";
import { Op } from "sequelize";
import { Category } from "../infrastructure/database/models/category.model";
import { ProductImage } from "../infrastructure/database/models/product-images.model";
import { Product } from "../infrastructure/database/models/product.model";

export async function createFakeProductsData() {
	console.log({
		path: path.resolve(__dirname, "..", "..", "public", "images"),
	});
	const categoriesFolder = fs.readdirSync(
		path.resolve(__dirname, "..", "..", "public", "images"),
	);

	console.log({ categoriesFolder });

	const products = categoriesFolder.map(async (categoriesFolder) => {
		const categoriesImages = fs.readdirSync(
			path.resolve(__dirname, "..", "..", "public", "images", categoriesFolder),
		);

		console.log({ categoriesImages });

		const categoryProducts = categoriesImages.map(async (categoryImage) => {
			const productName = categoryImage.split(".")[0];
			console.log({ productName });

			const category = await Category.findOne({
				where: {
					name: {
						[Op.like]: `%${categoriesFolder}%`,
					},
				},
			});

			console.log({ category });

			if (!category) {
				return;
			}

			const newProduct = await Product.create({
				name: productName,
				price: Math.floor(Math.random() * 10000),
				description: "Lorem ipsum dolor sit amet",
				categoryId: category.id,
			});

			console.log({ newProduct });

			const productImage = await ProductImage.create({
				productId: newProduct.id,
				url: `${process.env.API_URL}/api/public/images/${categoriesFolder}/${categoryImage}`,
			});

			console.log({ productImage });
		});

		await Promise.all(categoryProducts);
	});

	await Promise.all(products);
}
