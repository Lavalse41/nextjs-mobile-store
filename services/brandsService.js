const { brands } = require("../database/models");

console.log(JSON.stringify(brands));

export async function createBrands({ name }) {
  const createdBrand = await brands.create({
    name: name,
  });
  return createdBrand.dataValues;
}

export async function getBrands() {
  const allBrands = await brands.findAll();
  return allBrands;
}
