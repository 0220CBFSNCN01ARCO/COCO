/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Product = sequelize.define('Product', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'description'
		},
		image: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'image'
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'price'
		},
		idBrands: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Brand',
				key: 'id'
			},
			field: 'idBrands'
		},
		idColours: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Colour',
				key: 'id'
			},
			field: 'idColours'
		},
		idCategoriesProduct: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'CategoryProduct',
				key: 'id'
			},
			field: 'idCategoriesProduct'
		},
		idOffers: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Offer',
				key: 'id'
			},
			field: 'idOffers'
		}
	}, {
		tableName: 'products',
		timestamps: false
	});

	Product.associate = function(models){
		Product.belongsTo(models.Brand, {
			as: 'brand',
			foreignKey: 'idBrands'
		});

		Product.belongsTo(models.Colour, {
			as: 'colour',
			foreignKey: 'idColours'
		});

		Product.belongsTo(models.CategoryProduct, {
			as: 'categoryProduct',
			foreignKey: 'idCategoriesProduct'
			
		});

		Product.belongsTo(models.Offer, {
			as: 'offer',
			foreignKey: 'idOffers'
		});

		Product.belongsToMany(models.Size, {
			as: 'sizes',
			through: models.ProductSize,
			foreignKey: 'idProducts',
			otherKey: 'idSizes'
		})
	}

	return Product;
};
