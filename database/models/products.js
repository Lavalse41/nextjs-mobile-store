const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class products extends Model {
  static associate(models) {
    products.belongsTo(models.brands, {
      foreignKey: "brandId",
      targetKey: "id",
      as: "brand",
    });
  }
}
products.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    images: {
      type: DataTypes.STRING,
    },
    brandId: {
      type: DataTypes.UUID,
      field: "brand_id",
    },
  },
  {
    sequelize: connection,
    modelName: "products",
    timestamps: true,
    underscored: true,
  }
);

module.exports = products;
