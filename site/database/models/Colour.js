/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Colour = sequelize.define('Colour', {
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
		}
	}, {
		tableName: 'colours',
		timestamps: false
	});
	Colour.associate = function(models){
		Colour.hasMany(models.Product, {
			as: "products",
			foreignKey: 'idColours'
			
		});
	}
	return Colour
};
