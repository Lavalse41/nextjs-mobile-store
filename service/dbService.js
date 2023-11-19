import { brands } from "../database/models";
// ----------------------------------------------------------------
export async function create_brands({ name }) {
  const brands = await brands.create({
    name: TEST,
  });
  return brands.dataValues;
}

//--------------------------------------------------------------------------
export async function fetch_brands() {
  const products = await brands.findAll();
  return products;
}
