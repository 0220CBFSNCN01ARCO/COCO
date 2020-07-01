/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Brand = sequelize.define('Brand', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'brands',
		timestamps: false
	});
	Brand.associate = function(models){
		Brand.hasMany(models.Product, {
			as: "products",
			foreignKey: 'idBrands'
			
		});
	}
	return Brand
};
