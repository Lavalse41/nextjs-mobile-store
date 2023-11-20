const { products } = require("../database/models");
const { brands } = require("../database/models");

export async function getProducts() {
  const allProducts = await products.findAll({ include: brands });
  return allProducts;
}
