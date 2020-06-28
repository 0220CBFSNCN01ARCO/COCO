/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Product', {
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
				model: 'Brand',
				key: 'id'
			},
			field: 'idBrands'
		},
		idColours: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Colour',
				key: 'id'
			},
			field: 'idColours'
		},
		idCategories: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Category',
				key: 'id'
			},
			field: 'idCategories'
		},
		idOffers: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Offer',
				key: 'id'
			},
			field: 'idOffers'
		}
	}, {
		tableName: 'products'
	});
};
