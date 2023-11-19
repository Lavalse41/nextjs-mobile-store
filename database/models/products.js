/* eslint-disable no-unused-vars */
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";

const initProducts = (sequelize, Types) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      name: DataTypes.STRING,
      images: DataTypes.STRING,
      brandId: {
        type: DataTypes.UUID,
        field: "brand_id",
      },
    },
    {
      sequelize,
      modelName: "products",
      timestamps: true,
      underscored: true,
    }
  );
  return products;
};

export default initProducts(connection, DataTypes);
