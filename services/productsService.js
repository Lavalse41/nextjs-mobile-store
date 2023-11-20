const { products } = require("../database/models");

export async function getProducts() {
  const allProducts = await products.findAll();
  return allProducts;
}
