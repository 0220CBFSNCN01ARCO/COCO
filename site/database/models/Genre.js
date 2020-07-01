/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Genre = sequelize.define('Genre', {
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
		tableName: 'genres',
		timestamps: false
	});

	
	Genre.associate = function(models){
		Genre.hasMany(models.CategoryProduct, {
			as: 'categoryProducts',
			foreignKey: 'idGenres'
			
		});

		  }

	return Genre
};
