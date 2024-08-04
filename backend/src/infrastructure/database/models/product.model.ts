import { Column, DataType, Model, Table } from "sequelize-typescript";

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

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	description!: string;

	@Column({
		type: DataType.DECIMAL,
		allowNull: false,
	})
	price!: number;

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
