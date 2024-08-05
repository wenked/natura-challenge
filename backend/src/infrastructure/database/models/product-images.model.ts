import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from "sequelize-typescript";
import { Product } from "./product.model";

@Table({
	tableName: "product_images",
	timestamps: true,
	underscored: true,
})
export class ProductImage extends Model {
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		primaryKey: true,
	})
	id!: string;

	@ForeignKey(() => Product)
	@Column({
		type: DataType.UUID,
		allowNull: false,
		field: "product_id",
		onDelete: "CASCADE",
	})
	productId!: string;

	@BelongsTo(() => Product)
	product!: Product;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	url!: string;

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
