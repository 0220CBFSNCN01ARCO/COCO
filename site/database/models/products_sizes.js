/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productsSizes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'quantity'
		},
		idProducts: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'products',
				key: 'id'
			},
			field: 'idProducts'
		},
		idSizes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'sizes',
				key: 'id'
			},
			field: 'idSizes'
		}
	}, {
		tableName: 'products_sizes'
	});
};
