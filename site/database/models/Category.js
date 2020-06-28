/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {

	const Category = sequelize.define('Category', {
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
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'description'
		}
	}, {
		tableName: 'categories'
	});

	Category.associate = function(models){
		Category.hasMany(models.User, {
			as: "users",	
		})
	}

	return Category
};
