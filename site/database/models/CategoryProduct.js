/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const CategoryProduct = sequelize.define('CategoryProduct', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'description'
		},
		idGenres: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idGenres'
		}
	}, {
		tableName: 'categoryproduct',
		timestamps: false
	});

	CategoryProduct.associate = function(models){
		CategoryProduct.hasMany(models.Product, {
			as: 'products',
			foreignKey: 'idCategoriesProduct'
			
		});
	}

	return CategoryProduct
};
