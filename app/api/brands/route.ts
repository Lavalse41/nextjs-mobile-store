import { createBrands, getBrands } from "../../../services/brandsService";

export const POST = async (req: Request, res: Response) => {
  try {
    const createdBrands = await createBrands(req.body);
    return new Response(JSON.stringify(createdBrands));
  } catch (err) {
    return new Response(`Error posting data: ${err.message}`, {
      status: 500,
    });
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    const allBrands = await getBrands();
    return new Response(JSON.stringify(allBrands));
  } catch (err) {
    return new Response(`Error fetching data: ${err.message}`, {
      status: 500,
    });
  }
};
