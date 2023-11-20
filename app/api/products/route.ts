import { create_brands, fetch_brands } from "../../../service/dbService";

export const POST = async (req: Request, res: Response) => {
  try {
    const created_brands = await create_brands(req.body);
    return new Response(JSON.stringify(created_brands));
  } catch (err) {
    return new Response(`Error posting data: ${err.message}`, {
      status: 500,
    });
  }
};

export const GET = async (req: Request, res: Response) => {
  try {
    const all_brands = await fetch_brands();
    return new Response(JSON.stringify(all_brands));
  } catch (err) {
    return new Response(`Error fetching data: ${err.message}`, {
      status: 500,
    });
  }
};

// export const PUT = async (req: Request, res: Response) => {
//   // Do something for PUT
//   res.status(200).send("We Secured the PUT API End Point");
// };

// export const DELETE = async (req: Request, res: Response) => {
//   // Do something for DELETE
//   res.status(200).send("We Secured the DELETE API End Point");
// };
