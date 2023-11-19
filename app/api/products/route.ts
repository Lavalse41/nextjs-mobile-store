import { create_brands, fetch_brands } from "../../../service/dbService";

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const created_brands = await create_brands(req.body);
        res.status(200).json(create_brands);
        break;
      }
      case "GET": {
        //Do some thing
        const all_brands = await fetch_brands();
        res.status(200).json(all_brands);
        break;
      }
      case "PUT": {
        //Do some thing
        res.status(200).send("We Secured the PUT API End Point");
        break;
      }
      case "DELETE": {
        //Do some thing
        res.status(200).send("We Secured the DELETE API End Point");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "products",
      message: err.message,
    });
  }
};

export default handler;
