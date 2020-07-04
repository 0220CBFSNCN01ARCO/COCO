/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Discount = sequelize.define('Discount', {
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
		tableName: 'discounts',
		timestamps: false
	});
	Discount.associate = function(models){
		Discount.hasMany(models.Offer, {
			as: "offers",
			foreignKey: 'idDiscounts'
		});
	};
	return Discount
};
