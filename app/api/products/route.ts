import { getProducts } from "../../../services/productsService";

export const GET = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return new Response(JSON.stringify(products));
  } catch (err) {
    return new Response(`Error fetching data: ${err.message}`, {
      status: 500,
    });
  }
};
