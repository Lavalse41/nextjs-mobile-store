const { Model, DataTypes } = require("sequelize");
const connection = require("../connection");

class brands extends Model {
  static associate(models) {
    brands.hasMany(models.products, {
      sourceKey: "id",
      foreignKey: "brandId",
      as: "products",
    });
  }
}

brands.init(
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
  },
  {
    sequelize: connection,
    modelName: "brands",
    timestamps: true,
    underscored: true,
  }
);

module.exports = brands;
