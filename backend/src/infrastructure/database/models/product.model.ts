import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from "sequelize-typescript";
import { Category } from "./category.model";
import { ProductImage } from "./product-images.model";

@Table({
	tableName: "products",
	timestamps: true,
	underscored: true,
})
export class Product extends Model {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id!: string;

	@ForeignKey(() => Category)
	@Column({
		type: DataType.UUID,
		allowNull: false,
		field: "category_id",
		onDelete: "CASCADE",
	})
	categoryId!: string;

	@BelongsTo(() => Category)
	category!: Category;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		field: "name",
	})
	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	price!: number;

	@HasMany(() => ProductImage)
	images!: ProductImage[];

	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW,
		field: "created_at",
	})
	createdAt!: Date;

	@Column({
		type: DataType.DATE,
		defaultValue: DataType.NOW,
		field: "updated_at",
	})
	updatedAt!: Date;
}
