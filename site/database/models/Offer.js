/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Offer', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		has: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: '0',
			field: 'has'
		},
		description: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'description'
		},
		idDiscounts: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Discount',
				key: 'id'
			},
			field: 'idDiscounts'
		}
	}, {
		tableName: 'offers',
		timestamps: false
	});
};
