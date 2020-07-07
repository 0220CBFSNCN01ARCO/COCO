/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Size = sequelize.define('Size', {
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
		tableName: 'sizes',
		timestamps: false
	});

	Size.associate = function(models){
		Size.hasMany(models.Product, {
			as: 'products',
			foreignKey: 'idSizes'
		/*
		Size.belongsToMany(models.Product, {
			as: 'products',
			through: models.ProductSize,
			foreignKey: 'idSizes',
			otherKey: 'idProducts',
			timestamps: false
		*/
		})
		
	}
	return Size
};
