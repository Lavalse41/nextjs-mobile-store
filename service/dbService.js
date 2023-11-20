// import { brands } from "../database/models";
const { brands } = require("../database/models");

console.log(JSON.stringify(brands));

export async function create_brands({ name }) {
  const createdBrand = await brands.create({
    name: name,
  });
  return createdBrand.dataValues;
}

export async function fetch_brands() {
  const allBrands = await brands.findAll();
  return allBrands;
}
