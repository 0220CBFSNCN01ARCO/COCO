/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {

	const User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		first_Name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'first_name'
		},
		last_Name: {
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
				model: 'Category',
				key: 'id'
			},
			field: 'idCategories'
		}
	}, {
		tableName: 'users',
		timestamps: false
	});

	User.associate = function(models){
		User.belongsTo(models.Category, {
			as: "category",
			foreignKey: "idCategories"
			
		})
	}

	return User
};
