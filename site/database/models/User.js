/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		firstName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'first_name'
		},
		lastName: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'last_name'
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'password'
		},
		avatar: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'avatar'
		},
		idCategories: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'categories',
				key: 'id'
			},
			field: 'idCategories'
		}
	}, {
		tableName: 'users'
	});
};
