/* eslint-disable no-unused-vars */
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";

const initBrands = (sequelize, Types) => {
  class brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "brands",
      timestamps: true,
      underscored: true,
    }
  );
  return brands;
};

export default initBrands(connection, DataTypes);
