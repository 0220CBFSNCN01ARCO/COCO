/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('products', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'description'
		},
		image: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'image'
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'price'
		},
		idBrands: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'brands',
				key: 'id'
			},
			field: 'idBrands'
		},
		idColours: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'colours',
				key: 'id'
			},
			field: 'idColours'
		},
		idCategories: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'categories',
				key: 'id'
			},
			field: 'idCategories'
		},
		idOffers: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'offers',
				key: 'id'
			},
			field: 'idOffers'
		}
	}, {
		tableName: 'products'
	});
};
