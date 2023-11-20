const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      this.belongsTo(models.brands);
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
        references: {
          model: brands,
          key: "id",
        },
      },
    },
    {
      sequelize: connection,
      modelName: "products",
      timestamps: true,
      underscored: true,
    }
  );

  return products;
};
