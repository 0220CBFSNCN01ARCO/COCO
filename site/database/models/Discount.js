/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('discounts', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		percentage: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'percentage'
		}
	}, {
		tableName: 'discounts'
	});
};
